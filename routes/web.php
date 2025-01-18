
<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::resource('rooms', RoomController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('faculties', FacultyController::class);
    Route::resource('courses', CourseController::class);
    Route::resource('students', StudentController::class);
    Route::get('add-new-timetable', function () {
        // return Inertia::render('AddTimetable');
    })->name('timetable.add');
});

Route::get('file-upload-to-s3', function () {
    return view('file.upload');
});

Route::post('uploading', function (Request $request) {
    if ($request->hasFile('myfile')) {
        $file = $request->file('myfile')->store('testing', [
            'disk' => 's3',
            'visibility' => 'public'
        ]);

        Log::info('url =>' . 'https://special-project-3001.s3.ap-southeast-1.amazonaws.com/' . $file);
        return redirect()->back()->with('url', 'https://special-project-3001.s3.ap-southeast-1.amazonaws.com/' . $file);
    }

    return redirect()->back()->with('message', 'File uploading Failed!');
})->name('uploading');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
