<?php

namespace App\Exports;

use App\Models\Course;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CoursesExport implements FromCollection, WithMapping, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Course::select(['title', 'course_code', 'credit', 'program_id', 'faculty_id'])->with(['program:id,name', 'faculty:id,name'])
            ->get();
    }

    public function map($course): array
    {
        return [
            $course->title,
            $course->course_code,
            $course->faculty ? $course->faculty->name : 'N/A',
            $course->credit,
            $course->program ? $course->program->name : 'N/A',
        ];
    }

    public function headings(): array
    {
        return ['Title', 'Course Code', 'Instructor', 'Credit', 'Program'];
    }
}
