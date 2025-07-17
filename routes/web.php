<?php

use Illuminate\Support\Facades\Route;

Route::get('/todo', function () {
    return view('todo');
});
