<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/dashboard');

    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    Route::redirect('/settings', '/settings/edit-profile');

    Route::get(
        '/settings/edit-profile',
        [SettingController::class, 'editProfile']
    )->name('settings.index');

    Route::get(
        '/settings/preference',
        [SettingController::class, 'preference']
    )->name('settings.preference');

    Route::get(
        '/settings/security',
        [SettingController::class, 'security']
    )->name('settings.security');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
