<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    public $fillable = ['name', 'description'];

    public function students()
    {
        // return $this->hasMany(Student::class);
    }
}
