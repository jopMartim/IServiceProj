<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function authenticate(Request $request) {
        // Get only email and password from request
        $credentials = $request->only('email', 'password');
  
        // Get user by email
        $company = Company::where('email', $credentials['email'])->first();
  
        // Validate Company
        if(!$company) {
          return response()->json([
            'error' => 'Invalid credentials'
          ], 401);
        }
  
        // Validate Password
        if (!Hash::check($credentials['password'], $company->password)) {
            return response()->json([
              'error' => 'Invalid credentials'
            ], 401);
        }
}
}
