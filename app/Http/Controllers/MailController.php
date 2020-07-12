<?php

namespace App\Http\Controllers;

use App\Mail\ReplyMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class MailController extends Controller
{
    public function sendReply($user){
        Mail::to($user)->send(new ReplyMail());
    }
}
