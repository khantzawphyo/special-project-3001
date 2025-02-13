<?php

namespace App\Http\Controllers;

use App\Exports\CoursesExport;
use App\Models\Course;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::with(['program', 'faculty', 'courseType'])->get();

        $filteredCourses = Course::filter(request(['program']))->with(['program', 'faculty', 'courseType'])->paginate(10)->withQueryString();

        // Group courses by their program
        $roleCounts = $courses->groupBy('program.name')->map(function ($group) {
            return $group->count();
        });

        // Extract counts based on program
        $noOfCSE = $roleCounts->get('CSE', 0);
        $noOfECE = $roleCounts->get('ECE', 0);
        $noOfBoth = $roleCounts->get('CSE and ECE', 0);

        return Inertia::render('Course/Index', [
            'courses' => $filteredCourses,
            'noOfCSECourses' => $noOfCSE,
            'noOfECECourses' => $noOfECE,
            'noOfBothCourses' => $noOfBoth,
            'totalCourses' => $courses->count(),
        ]);
    }

    public function exportExcel()
    {
        $fileName = 'courses-' . now()->format('d-m-Y') . '.xlsx';
        return Excel::download(new CoursesExport, $fileName);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $programs = Program::all();
        return Inertia::render('Course/Create', ['programs' => $programs]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Course::create($request->validated());
        return redirect()->route('courses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return $course;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        $programs = Program::all();
        return Inertia::render('Course/Edit', ['programs' => $programs]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        return redirect()->route('courses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course->delete();
        return redirect()->route('courses.index');
    }
}
