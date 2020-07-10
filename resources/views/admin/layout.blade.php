<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags-->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="au theme template">
  <meta name="author" content="Hau Nguyen">
  <meta name="keywords" content="au theme template">

  <!-- Title Page-->
  <title>Webforest Admin Dashboard</title>

  <!-- Fontfaces CSS-->
  <link href="{{asset('css/font-face.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/font-awesome-4.7/css/font-awesome.min.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/font-awesome-5/css/fontawesome-all.min.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/mdi-font/css/material-design-iconic-font.min.css')}}" rel="stylesheet" media="all">

  <!-- Bootstrap CSS-->
  <link href="{{asset('vendor/bootstrap-4.1/bootstrap.min.css')}}" rel="stylesheet" media="all">

  <!-- Vendor CSS-->
  <link href="{{asset('vendor/animsition/animsition.min.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css')}}" rel="stylesheet"
    media="all">
  <link href="{{asset('vendor/wow/animate.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/css-hamburgers/hamburgers.min.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/slick/slick.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/select2/select2.min.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/perfect-scrollbar/perfect-scrollbar.css')}}" rel="stylesheet" media="all">
  <link href="{{asset('vendor/vector-map/jqvmap.min.css')}}" rel="stylesheet" media="all">

  <!-- Main CSS-->
  <link href="{{asset('css/theme.css')}}" rel="stylesheet" media="all">


</head>

<body class="animsition">
  <div class="page-wrapper">
    <!-- MENU SIDEBAR-->
    <aside class="menu-sidebar2">
      <div class="logo">
        <a class="text-white" href="{{route('adminhomepage')}}">
          Webforest Admin Panel
        </a>
      </div>
      <div class="menu-sidebar2__content js-scrollbar1">
        <div class="account2">
          <h4 class="name">{{ Auth::user()->name }}</h4>
          <form action="{{ route('logout') }}" method="POST">
            <button type="submit">Sign out</button>
            @csrf
          </form>
        </div>
        <nav class="navbar-sidebar2">
          <ul class="list-unstyled navbar__list">
            <li class="{{ (request()->is('restrictedadminpage/dashboard')) ? 'active' : '' }}">
              <a class="js-arrow" href="{{route('adminhomepage')}}">
                <i class="fas fa-tachometer-alt"></i>Dashboard
              </a>
            </li>
            <li class="{{ (request()->is('restrictedadminpage/blog')) ? 'active' : '' }}">
              <a href="{{route('adminblogpage')}}">
                <i class="fas fa-copy"></i>Blogs</a>
            </li>
            <li class="{{ (request()->is('restrictedadminpage/schedule')) ? 'active' : '' }}">
              <a href="{{route('adminschedulespage')}}">
                <i class="fas fa-calendar-alt"></i>Schedules</a>
            </li>
            <li class="{{ (request()->is('restrictedadminpage/visitorinfo')) ? 'active' : '' }}">
              <a href="inbox.html">
                <i class="zmdi zmdi-account-calendar"></i>Visitor Info</a>
            </li>
            <li class="{{ (request()->is('restrictedadminpage/settings')) ? 'active' : '' }}">
              <a href="inbox.html">
                <i class="zmdi zmdi-settings"></i>Settings</a>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
    <!-- END MENU SIDEBAR-->
    <header class="header-desktop2">
      <div class="section__content section__content--p30">
        <div class="container-fluid">
          <div class="header-wrap2">
            <div class="logo d-block d-lg-none">
              <a href="#">
                <img src="images/icon/logo-white.png" alt="CoolAdmin" />
              </a>
            </div>
            <div class="header-button2">
              <div class="header-button-item js-item-menu">
                <i class="zmdi zmdi-search"></i>
                <div class="search-dropdown js-dropdown">
                  <form action="">
                    <input class="au-input au-input--full au-input--h65" type="text"
                      placeholder="Search for datas &amp; reports..." />
                    <span class="search-dropdown__icon">
                      <i class="zmdi zmdi-search"></i>
                    </span>
                  </form>
                </div>
              </div>
              <div class="header-button-item has-noti js-item-menu">
                <i class="zmdi zmdi-notifications"></i>
                <div class="notifi-dropdown js-dropdown">
                  <div class="notifi__title">
                    <p>You have 3 Notifications</p>
                  </div>
                  <div class="notifi__item">
                    <div class="bg-c1 img-cir img-40">
                      <i class="zmdi zmdi-email-open"></i>
                    </div>
                    <div class="content">
                      <p>You got a email notification</p>
                      <span class="date">April 12, 2018 06:50</span>
                    </div>
                  </div>
                  <div class="notifi__item">
                    <div class="bg-c2 img-cir img-40">
                      <i class="zmdi zmdi-account-box"></i>
                    </div>
                    <div class="content">
                      <p>Your account has been blocked</p>
                      <span class="date">April 12, 2018 06:50</span>
                    </div>
                  </div>
                  <div class="notifi__item">
                    <div class="bg-c3 img-cir img-40">
                      <i class="zmdi zmdi-file-text"></i>
                    </div>
                    <div class="content">
                      <p>You got a new file</p>
                      <span class="date">April 12, 2018 06:50</span>
                    </div>
                  </div>
                  <div class="notifi__footer">
                    <a href="#">All notifications</a>
                  </div>
                </div>
              </div>
              <div class="header-button-item mr-0 js-sidebar-btn">
                <i class="zmdi zmdi-menu"></i>
              </div>
              <div class="setting-menu js-right-sidebar d-none d-lg-block">
                <div class="account-dropdown__body">
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-account"></i>Account</a>
                  </div>
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-settings"></i>Setting</a>
                  </div>
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-money-box"></i>Billing</a>
                  </div>
                </div>
                <div class="account-dropdown__body">
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-globe"></i>Language</a>
                  </div>
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-pin"></i>Location</a>
                  </div>
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-email"></i>Email</a>
                  </div>
                  <div class="account-dropdown__item">
                    <a href="#">
                      <i class="zmdi zmdi-notifications"></i>Notifications</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- PAGE CONTAINER-->
    @if(!request()->is('restrictedadminpage/dashboard'))
    <div class="page-container">
      <div class="main-content">
        <div class="section__content section__content--p30">
          <div class="container-fluid">
            <div class="row">
              @endif
              @section('content')
              @show
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Jquery JS-->
  <script src="{{asset('vendor/jquery-3.2.1.min.js')}}"></script>
  <!-- Bootstrap JS-->
  <script src="{{asset('vendor/bootstrap-4.1/popper.min.js')}}"></script>
  <script src="{{asset('vendor/bootstrap-4.1/bootstrap.min.js')}}"></script>
  <!-- Vendor JS       -->
  <script src="{{asset('vendor/slick/slick.min.js')}}">
  </script>
  <script src="{{asset('vendor/wow/wow.min.js')}}"></script>
  <script src="{{asset('vendor/animsition/animsition.min.js')}}"></script>
  <script src="{{asset('vendor/bootstrap-progressbar/bootstrap-progressbar.min.js')}}">
  </script>
  <script src="{{asset('vendor/counter-up/jquery.waypoints.min.js')}}"></script>
  <script src="{{asset('vendor/counter-up/jquery.counterup.min.js')}}">
  </script>
  <script src="{{asset('vendor/circle-progress/circle-progress.min.js')}}"></script>
  <script src="{{asset('vendor/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
  <script src="{{asset('vendor/chartjs/Chart.bundle.min.js')}}"></script>
  <script src="{{asset('vendor/select2/select2.min.js')}}">
  </script>
  <script src="{{asset('vendor/vector-map/jquery.vmap.js')}}"></script>
  <script src="{{asset('vendor/vector-map/jquery.vmap.min.js')}}"></script>
  <script src="{{asset('vendor/vector-map/jquery.vmap.sampledata.js')}}"></script>
  <script src="{{asset('vendor/vector-map/jquery.vmap.world.js')}}"></script>

  <!-- Main JS-->
  <script src="{{asset('js/main.js')}}"></script>
  <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
  <script>
    CKEDITOR.replace( 'editor' );
  </script>

</body>

</html>
<!-- end document-->