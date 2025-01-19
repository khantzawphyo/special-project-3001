<?php

namespace App\Exports;

use App\Models\Room;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RoomsExport implements FromCollection, WithMapping, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Room::select(['name', 'room_type_id'])
            ->with(['roomType:id,type,capacity'])
            ->get();
    }

    public function map($room): array
    {
        return [
            $room->name,
            $room->roomType->type,
            $room->roomType->capacity,
        ];
    }

    public function headings(): array
    {
        return ['Name', 'Type', 'Capacity'];
    }
}
