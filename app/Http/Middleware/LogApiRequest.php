<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogApiRequest
{
    public function handle(Request $request, Closure $next)
    {
        // ログ出力：ユーザー、メソッド、URL、パラメータ、タイムスタンプ
        Log::info('APIリクエスト', [
            'user' => $request->user()?->id ?? 'ゲスト',
            'method' => $request->method(),
            'url' => $request->fullUrl(),
            'params' => $request->all(),
            'time' => now()->toDateTimeString(),
        ]);

        return $next($request);
    }
}
