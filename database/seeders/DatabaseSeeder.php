<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            MajorSeeder::class,
            SemesterSeeder::class,
            RankSeeder::class,
            RoomTypeSeeder::class,
            RoomSeeder::class,
            RoleSeeder::class,
            DepartmentSeeder::class,
            StudentSeeder::class,
            FacultySeeder::class,
            ProgramSeeder::class,
            CourseSeeder::class,
        ]);
    }
}
