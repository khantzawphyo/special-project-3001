
<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/sign-in');

// Route::get('/dashboard', function () {
//     return Inertia::render('Welcome');
// });

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

Route::get('/dashboard', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
