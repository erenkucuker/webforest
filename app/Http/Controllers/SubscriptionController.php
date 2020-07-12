<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Newsletter;
class SubscriptionController extends Controller
{
    public function subscribe(Request $request){
         if ( ! Newsletter::isSubscribed($request->email) ){
            Newsletter::subscribe($request->email);
            return response()->json(['message' => 'Your Contact request has been sent. Thanks for contact with us.','classtype' => 'success']);
        } else{
            return response()->json(['message' => 'You already sent contact request.','classtype' => 'error']);
        }
    }
}

