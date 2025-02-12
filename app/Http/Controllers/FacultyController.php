<?php

namespace App\Http\Controllers;

use App\Exports\FacultiesExport;
use App\Http\Requests\Faculty\StoreFacultyRequest;
use App\Models\Faculty;
use Illuminate\Http\Request;
use App\Http\Requests\Faculty\UpdateFacultyRequest;
use App\Models\Department;
use App\Models\Role;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class FacultyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faculties = Faculty::with(['department', 'rank', 'courses'])->get();
        $paginatedFaculties = Faculty::with(['department', 'rank', 'courses'])->paginate(10);

        // Group faculties by their role
        $rankCounts = $faculties->groupBy('rank.title')->map(function ($group) {
            return $group->count();
        });

        // Extract counts based on roles
        $noOfProfessor = $rankCounts->get('Professor', 0);
        $noOfAssistProf = $rankCounts->get('Associate Professor', 0);
        $noOfLecturer = $rankCounts->get('Lecturer', 0);
        $noOfAssistLect = $rankCounts->get('Assistant Lecturer', 0);

        return Inertia::render('Faculty/Index', [
            'faculties' => $paginatedFaculties,
            'noOfFaculty' => $faculties->count(),
            'noOfProfessor' => $noOfProfessor,
            'noOfAssistProf' => $noOfAssistProf,
            'noOfLecturer' => $noOfLecturer,
            'noOfAssistLect' => $noOfAssistLect,
        ]);
    }

    public function exportExcel()
    {
        $fileName = 'faculties-' . now()->format('d-m-Y') . '.xlsx';
        return Excel::download(new FacultiesExport, $fileName);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::all();
        $roles = Role::all();

        return Inertia::render('Faculty/Create', [
            'departments' => $departments,
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacultyRequest $request)
    {
        Faculty::create($request->validated());
        return redirect()->route('faculties.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Faculty $faculty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faculty $faculty)
    {
        $departments = Department::all();
        $roles = Role::all();

        return Inertia::render('Faculty/Edit', ['faculty' => $faculty, 'roles' => $roles, 'departments' => $departments]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacultyRequest $request, Faculty $faculty)
    {
        $faculty->update($request->validated());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faculty $faculty)
    {
        $faculty->delete();
        return redirect()->back();
    }
}
