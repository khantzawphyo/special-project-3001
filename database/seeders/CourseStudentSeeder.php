<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseStudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Retrieve all courses for semester 7
        $coursesForSemester7 = Course::where('semester_id', 7)->get();
        // Retrieve all courses for semester 5
        // $coursesForSemester5 = Course::where('semester_id', 5)->get();
        // Retrieve all courses for semester 3
        // $coursesForSemester3 = Course::where('semester_id', 3)->get();
        // Retrieve all courses for semester 1
        // $coursesForSemester1 = Course::where('semester_id', 1)->get();

        // Retrieve all students for semester 7
        $studentsInSemester7 = Student::where('semester_id', 7)->get();
        // Retrieve all students for semester 5
        // $studentsInSemester5 = Student::where('semester_id', 5)->get();
        // Retrieve all students for semester 3
        // $studentsInSemester3 = Student::where('semester_id', 3)->get();
        // Retrieve all students for semester 1
        // $studentsInSemester1 = Student::where('semester_id', 1)->get();

        foreach ($studentsInSemester7 as $student) {
            // Attach all courses for semester 7 to the student
            $student->courses()->syncWithoutDetaching($coursesForSemester7->pluck('id')->toArray());
        }

        // foreach ($studentsInSemester5 as $student) {
        //     // Attach all courses for semester 5 to the student
        //     $student->courses()->syncWithoutDetaching($coursesForSemester5->pluck('id')->toArray());
        // }

        // foreach ($studentsInSemester3 as $student) {
        //     // Attach all courses for semester 3 to the student
        //     $student->courses()->syncWithoutDetaching($coursesForSemester3->pluck('id')->toArray());
        // }

        // foreach ($studentsInSemester1 as $student) {
        //     // Attach all courses for semester 1 to the student
        //     $student->courses()->syncWithoutDetaching($coursesForSemester1->pluck('id')->toArray());
        // }
    }
}
