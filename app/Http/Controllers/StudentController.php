<?php

namespace App\Http\Controllers;

use App\Exports\StudentsExport;
use App\Models\Major;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::with(['major', 'courses'])->get();
        return Inertia::render('Student/Index', ['students' => $students, 'noOfStudent' => $students->count()]);
    }

    public function exportExcel()
    {
        $fileName = 'students-' . now()->format('d-m-Y') . '.xlsx';
        return Excel::download(new StudentsExport, $fileName);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $majors = Major::all();
        return Inertia::render('Student/Create', ['majors' => $majors]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return redirect()->route('students.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $majors = Major::all();
        return Inertia::render('Student/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        return redirect()->route('students.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return redirect()->route('students.index');
    }
}
