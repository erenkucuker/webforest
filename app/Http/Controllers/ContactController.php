<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ContactForm;

class ContactController extends Controller
{
        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $ip_address= ContactForm::all();
        $request_ip=$request->ip();
        for($i = 0; $i < count($ip_address); $i++){
            if($ip_address[$i]->sender_ip == $request_ip){
                return response()->json(['message' => 'You already sent contact request.','classtype' => 'error']);
            } 
        }
        $contact= new ContactForm;
        $contact->contact_name = $request->contactname;
        $contact->contact_email = $request->contactemail;
        $contact->contact_content = $request->contactcontent;
        $contact->sender_ip = $request->ip();
        $contact->save();
        return response()->json(['message' => 'Your Contact request has been sent. Thanks for contact with us.','classtype' => 'success']);
     
 
       
    }
}
