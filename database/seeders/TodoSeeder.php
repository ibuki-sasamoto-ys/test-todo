<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    public function run(): void
    {
        Todo::truncate(); // Clear existing todos
        Todo::create([
            'text' => 'Learn Laravel',
            'complete_status' => false,
        ]);
        Todo::create([
            'text' => 'Build a Todo App',
            'complete_status' => true,
        ]);
        Todo::create([
            'text' => 'Write Tests',
            'complete_status' => false,
        ]);
        Todo::create([
            'text' => 'Deploy to Production',
            'complete_status' => true,
        ]);
        Todo::create([
            'text' => 'Refactor Code',
            'complete_status' => false,
        ]);
    }
}
