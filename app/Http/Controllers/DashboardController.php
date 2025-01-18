<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Faculty;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $faculties = Faculty::paginate(6);

        return Inertia::render('Dashboard', [
            'faculties' => $faculties,
            'noOfFaculty' => Faculty::count(),
            'noOfStudent' => Student::count(),
            'noOfCourse' => Course::count(),
        ]);
    }
}
