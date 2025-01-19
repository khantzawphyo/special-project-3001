<?php

namespace App\Http\Controllers;

use App\Exports\DepartmentsExport;
use App\Http\Requests\Dept\DepartmentRequest;
use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::all();
        return Inertia::render('Department/Index', ['departments' => $departments, 'noOfDepartments' => $departments->count()]);
    }

    public function exportExcel()
    {
        $fileName = 'departments-' . now()->format('d-m-Y') . '.xlsx';
        return Excel::download(new DepartmentsExport, $fileName);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Department/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DepartmentRequest $request)
    {
        Department::create($request->validated());
        return redirect()->route('departments.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        return Inertia::render('Department/Edit', ['department' => $department]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DepartmentRequest $request, Department $department)
    {
        $department->update($request->validated());
        return redirect()->route('departments.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();
        return redirect()->route('departments.index');
    }
}
