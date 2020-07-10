@extends('admin.layout')



@section('content')
<div class="col-lg-12">
  <div class="card">
    <div class="card-header">
      <strong>Edit Blog</strong> Post
    </div>
    <div class="card-body card-block">
      <form action="{{route('adminstoreeditblog',$blog->id)}}" method="post" enctype="multipart/form-data"
        class="form-horizontal">

        <div class="row form-group">
          <div class="col col-md-3">
            <label for="text-input" class=" form-control-label">Title</label>
          </div>
          <div class="col-12 col-md-9">
            <input type="text" id="text-input" name="title" placeholder="Title" class="form-control"
              value="{{$blog->title}}">

          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label for="email-input" class=" form-control-label">Content</label>
          </div>
          <div class="col-12 col-md-9">
            <textarea name="content" id="editor" class="form-control">
              {{$blog->content}}
                                </textarea>

          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label for="password-input" class=" form-control-label">Author</label>
          </div>
          <div class="col-12 col-md-9">
            <select name="author" id="select" class="form-control">
              <option value="0">Please select</option>
              <option value="Eren">Eren</option>

            </select>

          </div>
        </div>


        <div class="row form-group">
          <div class="col col-md-3">
            <label for="password-input" class=" form-control-label">Category</label>
          </div>
          <div class="col-12 col-md-9">
            <select name="category" id="select" class="form-control">
              <option value="0">Please select</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>

          </div>
        </div>
        <div class="row form-group">
          <div class="col col-md-3">
            <label for="file-input" class=" form-control-label">Image</label>
          </div>
          <div class="col-12 col-md-9">
            <input type="file" id="file-input" name="image" class="form-control-file">
          </div>
        </div>

        <div class="card-footer">
          <a class="btn btn-secondary btn-sm" href="{{route('adminblogpage')}}">Back</a>
          <button type="submit" class="btn btn-primary btn-sm">
            <i class="fa fa-dot-circle-o"></i> Submit
          </button>
        </div>
        @csrf
      </form>
    </div>

  </div>

</div>



@endsection