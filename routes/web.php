
<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StudentController;
use App\Models\Faculty;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {

    Route::get('/rooms/export-to-excel', [RoomController::class, 'exportExcel'])->name('rooms.export-excel');
    Route::resource('rooms', RoomController::class);

    Route::get('/departments/export-to-excel', [DepartmentController::class, 'exportExcel'])->name('departments.export-excel');
    Route::resource('departments', DepartmentController::class);

    Route::get('/faculties/export-to-excel', [FacultyController::class, 'exportExcel'])->name('faculties.export-excel');
    Route::resource('faculties', FacultyController::class);

    Route::get('/courses/export-to-excel', [CourseController::class, 'exportExcel'])->name('courses.export-excel');
    Route::resource('courses', CourseController::class);

    Route::get('/students/export-to-excel', [StudentController::class, 'exportExcel'])->name('students.export-excel');
    Route::resource('students', StudentController::class);

    Route::get('timetables', function () {
        return Inertia::render('Timetable/Index');
    })->name('timetables.index');

    Route::get('new-timetable', function () {

        return Inertia::render('Timetable/NewTimetable', [
            'faculties' => Faculty::all()
        ]);
    })->name('timetables.add');
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
