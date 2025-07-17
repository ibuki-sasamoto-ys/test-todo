<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\TodoSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        $this->call([
            TodoSeeder::class,
        ]);
    }
}
