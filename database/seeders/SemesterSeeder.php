<?php

namespace Database\Seeders;

use App\Models\Semester;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $semesters = [
            "Semester I",   //1
            "Semester II",
            "Semester III", //3
            "Semester IV",
            "Semester V",   //5
            "Semester VI",
            "Semester VII", //7
            "Semester VIII",
            "Semester IX",  //9
            "Semester X"
        ];

        foreach ($semesters as $semester) {
            Semester::create(['name' => $semester]);
        }
    }
}
