<?php

namespace App\Http\Requests\Faculty;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFacultyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        'name' => 'required|string|min:5|max:255',
            'email' => 'required|email',
            'phone_number' => 'required|string',
            // 'profilePic' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'gender' => 'required|string',
            'password' => 'required|string|confirmed',
            'role_id' => 'required|integer|exists:roles,id',
            'department_id' => 'required|integer|exists:departments,id',
        ];
    }
}
