<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'gender', 'major_id'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = ucwords($value);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

    public function courses()
    {
        // return $this->belongsToMany(Course::class);
    }
}
