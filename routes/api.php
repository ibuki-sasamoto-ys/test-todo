<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TodoController;

Route::prefix('v1')->group(function () {
    Route::apiResource('todos', TodoController::class);
});