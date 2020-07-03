<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/api/blogs', 'BlogController@index');

Route::get('/api/blogs/details/{id}','BlogController@getblogbyid');

Route::get('/api/blogs/categories','BlogController@categories');

Route::get('/api/blogs/recent-blogs', 'BlogController@recentblogs');

Route::get('/api/schedules','ScheduleController@index');

Route::post('/api/contact-us', 'ContactController@store');
Route::post('/api/schedules','ScheduleController@store');
Route::post('/api/schedules/upload','ScheduleController@storeImage');

Route::get('{any}', function () {
    return view('layout');
})->where('any', '.*');
