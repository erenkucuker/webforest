@extends('admin.layout')


@section('content')
<div class="col-md-12">
  <!-- DATA TABLE -->
  <h3 class="title-5 m-b-35">SCHEDULE LIST</h3>

  <div class="table-responsive table-responsive-data2">
    <table class="table table-data2">
      <thead>
        <tr>
          <th>

          </th>
          <th>Full name</th>
          <th>email</th>
          <th>platform</th>
          <th>Datetime</th>
          <th>industry</th>
          <th>ip adress</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        @forelse ($schedules as $schedule)
        <tr class="tr-shadow text-uppercase">
          <td>

          </td>
          <td>{{$schedule->full_name}}</td>
          <td>
            <span class="block-email">{{$schedule->email}}</span>
          </td>
          <td class="desc">{{$schedule->platform}}</td>
          <td>{{$schedule->date_time}}
          </td>
          <td>
            <span class="status--process">{{$schedule->industry}}</span>
          </td>
          <td>{{$schedule->sender_ip}}</td>

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