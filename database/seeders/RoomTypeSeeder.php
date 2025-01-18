<?php

namespace Database\Seeders;

use App\Models\RoomType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RoomType::create([
            'type' => 'Type A',
            'capacity' => 60
        ]);

        RoomType::create([
            'type' => 'Type B',
            'capacity' => 30
        ]);
    }
}
