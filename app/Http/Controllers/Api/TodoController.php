<?php

namespace App\Http\Controllers\Api;

use App\Models\Todo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TodoController extends Controller
{
    public function index()
    {
      return Todo::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $todo = Todo::create([
            'text' => $request->input('text'),
            'complete_status' => $request->input('complete_status', false),
        ]);
    
        return response()->json($todo, 201);
    }

}