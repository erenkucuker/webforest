@extends('admin.layout')

@section('content')

<div class="col-md-12">
  <div class="card">
    <div class="card-header">
      <strong class="card-title mb-3">BLOG DETAIL</strong>
    </div>
    <div class="card-body">
      <div class="mx-auto d-block">
        <h5 class="text-uppercase text-sm-center">
          Title : {{$blog->title}}</h5>
        <p class="text-sm-center mt-2 mb-1">Content : {!!$blog->content!!}</p>
        <p class="text-sm-center mt-2 mb-1">Author : {{$blog->author}}</p>
        <p class="text-sm-center mt-2 mb-1">
          Updated Date :
          {{date('d-m-Y', strtotime($blog->updated_at))}}</p>

        <a class="btn btn-secondary btn-sm" href="{{route('adminblogpage')}}">Back</a>
      </div>

    </div>
  </div>
</div>
@endsection