<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Program;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            [
                'title' => 'Engineering Mathematics I',
                'course_code' => 'MAT101',
                'semester_id' => 1,
                'faculty_id' => 1,
                'credit' => 3
            ],
            [
                'title' => 'Computer Programming Fundamentals',
                'course_code' => 'CSE102',
                'semester_id' => 1,
                'faculty_id' => 2,
                'credit' => 3
            ],
            [
                'title' => 'Physics for Engineers',
                'course_code' => 'PHY103',
                'semester_id' => 1,
                'faculty_id' => 3,
                'credit' => 4
            ],
            [
                'title' => 'Digital Logic Design',
                'course_code' => 'EEE104',
                'semester_id' => 1,
                'faculty_id' => 4,
                'credit' => 3
            ],
            [
                'title' => 'Introduction to Artificial Intelligence',
                'course_code' => 'CSE201',
                'semester_id' => 1,
                'faculty_id' => 5,
                'credit' => 3
            ],
            [
                'title' => 'Database Systems',
                'course_code' => 'CSE202',
                'semester_id' => 1,
                'faculty_id' => 10,
                'credit' => 3
            ],
            [
                'title' => 'Microcontroller Programming',
                'course_code' => 'EEE205',
                'semester_id' => 1,
                'faculty_id' => 6,
                'credit' => 3
            ],
            [
                'title' => 'Software Engineering',
                'course_code' => 'CSE301',
                'semester_id' => 1,
                'faculty_id' => 7,
                'credit' => 3
            ],
            [
                'title' => 'Data Structures and Algorithms',
                'course_code' => 'CSE204',
                'semester_id' => 1,
                'faculty_id' => 8,
                'credit' => 4
            ],
            [
                'title' => 'Operating Systems',
                'course_code' => 'CSE303',
                'semester_id' => 1,
                'faculty_id' => 9,
                'credit' => 4
            ]
        ];

        foreach ($courses as $course) {
            $programId = fake()->randomElement(range(1, Program::count()));
            Course::create(array_merge($course, ['program_id' => $programId]));
        }
    }
}
