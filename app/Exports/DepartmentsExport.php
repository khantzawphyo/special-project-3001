<?php

namespace App\Exports;

use App\Models\Department;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DepartmentsExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Department::select(['name', 'dept_code'])->get();
    }

    public function headings(): array
    {
        return ['Name', 'Department Code'];
    }
}
