<?php

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class StudentsExport implements FromCollection, WithMapping, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Student::select(['name', 'email', 'status', 'major_id'])->with(['major:id,name'])->get();
    }

    public function map($student): array
    {
        $rollNo =  strtoupper(explode('@', $student->email)[0]);

        return [
            $student->name,
            $rollNo,
            $student->email,
            $student->status,
            // $student->gender,
            $student->major->name,
        ];
    }

    public function headings(): array
    {
        return ['Name', 'Roll Number', 'Email', 'Status', 'Major'];
    }
}
