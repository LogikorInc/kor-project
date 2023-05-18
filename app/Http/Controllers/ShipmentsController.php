<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shipments;
use Illuminate\Support\Facades\DB;


use Carbon\Carbon;


class ShipmentsController extends Controller
{
    public function index()
	{
	    return Shipments::all();
	}

	public function GetShipments() 
	{
		// $test = Shipments::select('*')
		// ->whereRaw("create_date > DATE_SUB(NOW(), INTERVAL 2 WEEK) AND owner LIKE '%General Dynamics%' AND status <> Delivered")
		// ->get();

		// return $test->toJson();
		// return Shipments::where('owner', 'LIKE', "%General Dynamics%")->get();
		// return Shipments::where('create_date', '>=', Carbon::now()->firstOfMonth()->toDateTimeString())->get();
		$test = Shipments::select('primary_reference', 'create_date', 'actual_delivery','actual_ship','dest_name', 'status','target_delivery_early')
		// ->where('create_date', '>=', Carbon::now()->firstOfMonth()->toDateTimeString())
		->where('owner', 'LIKE', "%General Dynamics%")
		->get();

		return $test->toJson();
	}
}
