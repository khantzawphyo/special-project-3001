<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'course_code', 'course_type_id', 'credit', 'semester_id', 'program_id', 'faculty_id'];

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = ucwords($value);
    }

    public function setCourseCodeAttribute($value)
    {
        $this->attributes['course_code'] = ucwords($value);
    }

    public function students()
    {
        return $this->belongsToMany(Student::class);
    }

    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    public function program()
    {
        return $this->belongsTo(Program::class);
    }

    public function courseType()
    {
        return $this->belongsTo(CourseType::class);
    }
}
