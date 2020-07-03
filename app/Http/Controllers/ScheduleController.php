<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Schedule;

class ScheduleController extends Controller
{

    public function index(){
        $schedules=Schedule::all('date_time');
     return response()->json($schedules);
    }

            /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $ip_address= Schedule::all();
        $request_ip=$request->ip();
        for($i = 0; $i < count($ip_address); $i++){
            if($ip_address[$i]->sender_ip == $request_ip){
                return response()->json(['message' => 'You have already a Schedule day.','classtype' => 'error']);
            } 
        }
        $schedule = new Schedule;
        $schedule->full_name = $request->fullname;
        $schedule->email = $request->email;
        $schedule->phone_number = $request->phonenumber;
        $schedule->industry = $request->industry;
        $schedule->project_title = $request->projecttitle;
        $schedule->project_desc = $request->projectdesc;
        $schedule->date_time = $request->datetime;  
        $schedule->platform = $request->formplatformtype; 
        $schedule->platform_user = $request->formplatformuser;  
        $schedule->sender_ip = $request->ip();
        $schedule->save();
        return response()->json(['message' => 'Your Contact request has been sent. Thanks for contact with us.','classtype' => 'success']);
    
        }
                    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeImage(Request $request){
        $afs=$request->images;
        $c=$afs[0];
        $abc=json_decode($c);
        
        return response()->json($abc);
        
    }
        
        

    
}

