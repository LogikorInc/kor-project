<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ShipmentsController;
use App\Models\Shipments;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::post('login', [LoginController::class, 'authenticate']);

Route::group(['middleware' => 'auth:sanctum'], function (){
    Route::get('/user', function (Request $request) {
        return $request->user();    
    });
    
    Route::post('/logout', [LoginController::class, 'logout']);
});

/** 
**Basic Routes for a RESTful service: 
**Route::get($uri, $callback); 
**Route::post($uri, $callback); 
**Route::put($uri, $callback); 
**Route::delete($uri, $callback); 
** 
*/

Route::controller(ShipmentsController::class)->group(function() {
    Route::get('shipments', 'index'); // get all shipments
    Route::get('/shipments/recent', 'GetShipments');
});