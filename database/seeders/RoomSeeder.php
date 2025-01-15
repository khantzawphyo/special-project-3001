<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($roomNo = 200; $roomNo <= 210; $roomNo++) {
            $roomName = 'Room ' . $roomNo;

            Room::create([
                'name' => $roomName,
                'capacity' => fake()->randomElement([60, 120])
            ]);
        }
    }
}
