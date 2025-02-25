<?php

use App\Http\Controllers\ExamController;
use App\Models\Course;
use App\Models\ExamPeriod;
use App\Models\ExamSchedule;
use App\Models\Semester;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('timetables', [ExamController::class, 'index'])->name('timetables.index');
    Route::get('timetables/{semId}', [ExamController::class, 'show'])->name('timetables.show');
    Route::get('new-timetable', [ExamController::class, 'create'])->name('timetables.add');
    Route::post('new-timetable', [ExamController::class, 'store'])->name('timetables.store');
});
