<?php

use App\Http\Controllers\RelationController;
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

Route::get('/', function () {
    return view('welcome');
});
Route::get('one-to-one',[RelationController::class,'one_to_one']);
Route::get('one-to-many',[RelationController::class,'one_to_many']);
Route::post('one-to-many',[RelationController::class, 'add_comment'])->name('add_comment');

