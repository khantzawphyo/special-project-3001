<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'room_type_id'];

    public function scopeFilter($query, $filter)
    {
        $query->when($filter['room_type'] ?? false, function ($query, $name) {
            $query->whereHas('roomType', function ($query) use ($name) {
                $query->where('type', $name);
            });
        });
    }

    public function roomType()
    {
        return $this->belongsTo(RoomType::class);
    }
}
