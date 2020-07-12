<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use Newsletter;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
    
        return view ('admin.home');
    }
        public function blog(){
      
        return view ('admin.blogs');
    }
        public function login(){
    
        return view ('admin.login');
    }
        public function schedules(){
    
        return view ('admin.schedules');
    }
            public function createblog(){
    
        return view ('admin.createblog');
    }
    public function storecreateblog(Request $request) {
        $blog=new Blog;
        $blog->title=$request->title;
        $blog->content=$request->content;
        $blog->author=$request->author;
        $blog->category_id=$request->category;
        $blog->save();
        $imageName = $blog->id.".jpg";  
        $request->image->move(public_path('blog_images'), $imageName);
         
        return redirect()->route('adminblogpage');
    }

    public function detailblog($id){
        $blog=Blog::findOrFail($id);
        return view('admin.detailblog',compact('blog'));
    }
    public function deleteblog($id){
        $blog=Blog::findOrFail($id);
        $blog->delete();
        return redirect()->route('adminblogpage');
    }
    public function editblog($id){
        $blog=Blog::findOrFail($id);
        return view('admin.editblog',compact('blog'));
    }
    public function storeeditblog(Request $request ,$id){
       $blog=Blog::findOrFail($id);
        $blog->title=$request->title;
        $blog->content=$request->content;
        $blog->author=$request->author;
        $blog->category_id=$request->category;
        $blog->update();
        $imageName = $blog->id.".".$request->image->extension();  
        $request->image->move(public_path('blog_images'), $imageName);
        return redirect()->route('adminblogpage');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
