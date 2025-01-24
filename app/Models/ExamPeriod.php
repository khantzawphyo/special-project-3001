<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamPeriod extends Model
{
    protected $fillable = ['type'];

    public function examSchedules()
    {
        return $this->belongsToMany(ExamSchedule::class);
    }
}
