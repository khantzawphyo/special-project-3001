<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function editProfile()
    {
        return Inertia::render('Setting/EditProfile');
    }

    public function preference()
    {
        return Inertia::render('Setting/Preference');
    }

    public function security()
    {
        return Inertia::render('Setting/Security');
    }
}
