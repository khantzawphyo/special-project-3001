<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    protected $fillable = ['name'];

    protected $hidden = []; // Ensure 'students' is not hidden

    public function students()
    {
        return $this->hasMany(Student::class);
    }

    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function examSchedules()
    {
        return $this->hasMany(ExamSchedule::class);
    }
}
