<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamSchedule extends Model
{
    protected $fillable = ['semester_id', 'exam_date', 'exam_time_id', 'course_id', 'room_id', 'program_id'];

    public function examPeriod()
    {
        return $this->belongsTo(ExamPeriod::class);
    }
}
