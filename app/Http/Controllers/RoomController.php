<?php

namespace App\Http\Controllers;

use App\Http\Requests\Room\RoomRequest;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rooms = Room::with(['roomType'])->get();
        $noOfTypeA = Room::where('room_type_id', 1)->count();
        $noOfTypeB = Room::where('room_type_id', 2)->count();

        return Inertia::render('Room/Index', ['rooms' => $rooms, 'noOfTypeA' => $noOfTypeA, 'noOfTypeB' => $noOfTypeB]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roomTypes = RoomType::all();
        return Inertia::render('Room/Create', ['roomTypes' => $roomTypes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoomRequest $request)
    {
        Room::create($request->validated());
        return redirect()->route('rooms.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        $roomTypes = RoomType::all();

        return Inertia::render('Room/Edit', ['room' => $room, 'roomTypes' => $roomTypes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoomRequest $request, Room $room)
    {
        $room->update($request->validated());
        return redirect()->route('rooms.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('rooms.index');
    }
}
