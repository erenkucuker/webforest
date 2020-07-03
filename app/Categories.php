<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';
    public function blog(){
        return $this->belongsTo('App/Blog');
    }
}
