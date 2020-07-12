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
Route::group(['middleware' => ['auth']], function () { 
Route::get('/restrictedadminpage/blog', 'AdminController@blog')->name('adminblogpage');

Route::get('/restrictedadminpage/dashboard', 'AdminController@index')->name('adminhomepage');

Route::get('/restrictedadminpage/schedules', 'AdminController@schedules')->name('adminschedulespage');


Route::get('/restrictedadminpage/blog/create', 'AdminController@createblog')->name('admincreateblogpage');
Route::post('/restrictedadminpage/blog/create', 'AdminController@storecreateblog')->name('adminstorecreateblog');

Route::get('/restrictedadminpage/blog/{id}/edit', 'AdminController@editblog')->name('admineditblogpage');
Route::post('/restrictedadminpage/blog/{id}/edit', 'AdminController@storeeditblog')->name('adminstoreeditblog');


Route::get('/restrictedadminpage/blog/{id}', 'AdminController@detailblog')->name('admindetailblogpage');
Route::get('/restrictedadminpage/blog/{id}/delete', 'AdminController@deleteblog')->name('admindeleteblog');

});

Route::get('/restrictedadminpage', 'AdminController@login')->name('loginpage');




Route::get('/api/blogs', 'BlogController@index');

Route::get('/api/blogs/details/{id}','BlogController@getblogbyid');

Route::get('/api/blogs/categories','BlogController@categories');

Route::get('/api/blogs/recent-blogs', 'BlogController@recentblogs');

Route::get('/api/schedules','ScheduleController@index');

Route::post('/api/contact-us', 'ContactController@store');
Route::post('/api/schedules','ScheduleController@store');
Route::post('/api/schedules/upload','ScheduleController@storeImage');
Route::post('/api/subscribe','SubscriptionController@subscribe');
Route::get('/api/sendmail/{user}','MailController@sendReply');

Route::get('{any}', function () {
    return view('layout');
})->where('any', '.*');



Auth::routes();


