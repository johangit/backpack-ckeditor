<?php

namespace JohanCode\BackpackCkeditor;

use Illuminate\Support\ServiceProvider as LServiceProvider;

class ServiceProvider extends LServiceProvider
{
    public function boot()
    {
        $this->publishes([__DIR__ . '/../public/' => public_path() . "/"], 'assets');
    }

    public function register()
    {
    }
}