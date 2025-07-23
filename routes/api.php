<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TodoController;

Route::prefix('v1')
    ->middleware(['api.logger'])
    ->group(function () {
        Route::apiResource('todos', TodoController::class);
    });
