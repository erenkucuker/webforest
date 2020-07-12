@extends('admin.layout')

@section('content')
<div class="col-md-12">

  <!-- DATA TABLE -->
  <h3 class="title-5 m-b-35">BLOG LIST</h3>
  <div class="table-data__tool">
    <div class="table-data__tool-left">
      <div class="rs-select2--light rs-select2--md">
        <select class="js-select2" name="property">
          <option selected="selected">All Properties</option>
          <option value="">Option 1</option>
          <option value="">Option 2</option>
        </select>
        <div class="dropDownSelect2"></div>
      </div>
      <div class="rs-select2--light rs-select2--sm">
        <select class="js-select2" name="time">
          <option selected="selected">Today</option>
          <option value="">3 Days</option>
          <option value="">1 Week</option>
        </select>
        <div class="dropDownSelect2"></div>
      </div>
      <button class="au-btn-filter">
        <i class="zmdi zmdi-filter-list"></i>filters</button>
    </div>
    <div class="table-data__tool-right">
      <a href="{{route('admincreateblogpage')}}" class="au-btn au-btn-icon au-btn--green au-btn--small">
        <i class="zmdi zmdi-plus"></i>add item</a>
    </div>
  </div>
  <div class="table-responsive table-responsive-data2">
    <table class="table table-data2">
      <thead>
        <tr>
          <th>
            <label class="au-checkbox">
              <input type="checkbox">
              <span class="au-checkmark"></span>
            </label>
          </th>
          <th>title</th>
          <th>author</th>
          <th>Content</th>
          <th>created at</th>
          <th>category</th>
          <th>image</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        @forelse ($blogs as $blog)
        <tr class="tr-shadow text-uppercase">
          <td>
            <label class="au-checkbox">
              <input type="checkbox">
              <span class="au-checkmark"></span>
            </label>
          </td>
          <td>{{$blog->title}}</td>
          <td>
            <span class="block-email">{{$blog->author}}</span>
          </td>
          <td class="desc">{{strip_tags($blog->content)}}</td>
          <td>{{date('d-m-Y', strtotime($blog->created_at))}}
          </td>
          <td>
            <span class="status--process">{{$blog->category_id}}</span>
          </td>
          <td>
            <img class="tiny-image" src="{{asset('blog_images').'/'.$blog->id.'.jpg'}}">
          </td>
          <td>
            <div class="table-data-feature">
              <a href="{{route('admindetailblogpage',$blog->id)}}" class="item" data-toggle="tooltip"
                data-placement="top" title="View">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </a>
              <a href="{{route('admineditblogpage',$blog->id)}}" class="item" data-toggle="tooltip" data-placement="top"
                <a href="" class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="zmdi zmdi-edit"></i>
              </a>
              <a class="item" href="{{route('admindeleteblog',$blog->id)}}" data-placement=" top" title="Delete">
                <i class="zmdi zmdi-delete"></i>
              </a>

            </div>
          </td>
        </tr>
        <tr class="spacer"></tr>
        @empty

        @endforelse


      </tbody>
    </table>
  </div>


  <!-- END DATA TABLE -->
</div>


@endsection