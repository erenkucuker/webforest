@extends('admin.layout')


@section('content')
<div class="page-container2">
  <!-- HEADER DESKTOP-->

  <aside class="menu-sidebar2 js-right-sidebar d-block d-lg-none">
    <div class="logo">
      <a href="#">
        <img src="images/icon/logo-white.png" alt="Cool Admin" />
      </a>
    </div>
    <div class="menu-sidebar2__content js-scrollbar2">
      <div class="account2">
        <div class="image img-cir img-120">
          <img src="images/icon/avatar-big-01.jpg" alt="John Doe" />
        </div>
        <h4 class="name">john doe</h4>
        <form action="{{ route('logout') }}" method="POST">
          <button type="submit">Sign out</button>
          @csrf
        </form>

      </div>
      <nav class="navbar-sidebar2">
        <ul class="list-unstyled navbar__list">
          <li class="active has-sub">
            <a class="js-arrow" href="#">
              <i class="fas fa-tachometer-alt"></i>Dashboard
              <span class="arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </a>
            <ul class="list-unstyled navbar__sub-list js-sub-list">
              <li>
                <a href="index.html">
                  <i class="fas fa-tachometer-alt"></i>Dashboard 1</a>
              </li>
              <li>
                <a href="index2.html">
                  <i class="fas fa-tachometer-alt"></i>Dashboard 2</a>
              </li>
              <li>
                <a href="index3.html">
                  <i class="fas fa-tachometer-alt"></i>Dashboard 3</a>
              </li>
              <li>
                <a href="index4.html">
                  <i class="fas fa-tachometer-alt"></i>Dashboard 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="inbox.html">
              <i class="fas fa-chart-bar"></i>Inbox</a>
            <span class="inbox-num">3</span>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-shopping-basket"></i>eCommerce</a>
          </li>
          <li class="has-sub">
            <a class="js-arrow" href="#">
              <i class="fas fa-trophy"></i>Features
              <span class="arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </a>
            <ul class="list-unstyled navbar__sub-list js-sub-list">
              <li>
                <a href="table.html">
                  <i class="fas fa-table"></i>Tables</a>
              </li>
              <li>
                <a href="form.html">
                  <i class="far fa-check-square"></i>Forms</a>
              </li>
              <li>
                <a href="calendar.html">
                  <i class="fas fa-calendar-alt"></i>Calendar</a>
              </li>
              <li>
                <a href="map.html">
                  <i class="fas fa-map-marker-alt"></i>Maps</a>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a class="js-arrow" href="#">
              <i class="fas fa-copy"></i>Pages
              <span class="arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </a>
            <ul class="list-unstyled navbar__sub-list js-sub-list">
              <li>
                <a href="login.html">
                  <i class="fas fa-sign-in-alt"></i>Login</a>
              </li>
              <li>
                <a href="register.html">
                  <i class="fas fa-user"></i>Register</a>
              </li>
              <li>
                <a href="forget-pass.html">
                  <i class="fas fa-unlock-alt"></i>Forget Password</a>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a class="js-arrow" href="#">
              <i class="fas fa-desktop"></i>UI Elements
              <span class="arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </a>
            <ul class="list-unstyled navbar__sub-list js-sub-list">
              <li>
                <a href="button.html">
                  <i class="fab fa-flickr"></i>Button</a>
              </li>
              <li>
                <a href="badge.html">
                  <i class="fas fa-comment-alt"></i>Badges</a>
              </li>
              <li>
                <a href="tab.html">
                  <i class="far fa-window-maximize"></i>Tabs</a>
              </li>
              <li>
                <a href="card.html">
                  <i class="far fa-id-card"></i>Cards</a>
              </li>
              <li>
                <a href="alert.html">
                  <i class="far fa-bell"></i>Alerts</a>
              </li>
              <li>
                <a href="progress-bar.html">
                  <i class="fas fa-tasks"></i>Progress Bars</a>
              </li>
              <li>
                <a href="modal.html">
                  <i class="far fa-window-restore"></i>Modals</a>
              </li>
              <li>
                <a href="switch.html">
                  <i class="fas fa-toggle-on"></i>Switchs</a>
              </li>
              <li>
                <a href="grid.html">
                  <i class="fas fa-th-large"></i>Grids</a>
              </li>
              <li>
                <a href="fontawesome.html">
                  <i class="fab fa-font-awesome"></i>FontAwesome</a>
              </li>
              <li>
                <a href="typo.html">
                  <i class="fas fa-font"></i>Typography</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  <!-- END HEADER DESKTOP-->

  <!-- BREADCRUMB-->
  <section class="au-breadcrumb m-t-75">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="au-breadcrumb-content">
              <div class="au-breadcrumb-left">
                <span class="au-breadcrumb-span">You are here:</span>
                <ul class="list-unstyled list-inline au-breadcrumb__list">
                  <li class="list-inline-item active">
                    <a href="#">Home</a>
                  </li>
                  <li class="list-inline-item seprate">
                    <span>/</span>
                  </li>
                  <li class="list-inline-item">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END BREADCRUMB-->

  <!-- STATISTIC-->
  <section class="statistic">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="statistic__item">
              <h2 class="number">10,368</h2>
              <span class="desc">members online</span>
              <div class="icon">
                <i class="zmdi zmdi-account-o"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="statistic__item">
              <h2 class="number">388,688</h2>
              <span class="desc">items sold</span>
              <div class="icon">
                <i class="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="statistic__item">
              <h2 class="number">1,086</h2>
              <span class="desc">this week</span>
              <div class="icon">
                <i class="zmdi zmdi-calendar-note"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="statistic__item">
              <h2 class="number">$1,060,386</h2>
              <span class="desc">total earnings</span>
              <div class="icon">
                <i class="zmdi zmdi-money"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END STATISTIC-->

  <section>
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-8">
            <!-- RECENT REPORT 2-->
            <div class="recent-report2">
              <h3 class="title-3">recent reports</h3>
              <div class="chart-info">
                <div class="chart-info__left">
                  <div class="chart-note">
                    <span class="dot dot--blue"></span>
                    <span>products</span>
                  </div>
                  <div class="chart-note">
                    <span class="dot dot--green"></span>
                    <span>Services</span>
                  </div>
                </div>
                <div class="chart-info-right">
                  <div class="rs-select2--dark rs-select2--md m-r-10">
                    <select class="js-select2" name="property">
                      <option selected="selected">All Properties</option>
                      <option value="">Products</option>
                      <option value="">Services</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                  <div class="rs-select2--dark rs-select2--sm">
                    <select class="js-select2 au-select-dark" name="time">
                      <option selected="selected">All Time</option>
                      <option value="">By Month</option>
                      <option value="">By Day</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </div>
              </div>
              <div class="recent-report__chart">
                <canvas id="recent-rep2-chart"></canvas>
              </div>
            </div>
            <!-- END RECENT REPORT 2             -->
          </div>
          <div class="col-xl-4">
            <!-- TASK PROGRESS-->
            <div class="task-progress">
              <h3 class="title-3">task progress</h3>
              <div class="au-skill-container">
                <div class="au-progress">
                  <span class="au-progress__title">Web Design</span>
                  <div class="au-progress__bar">
                    <div class="au-progress__inner js-progressbar-simple" role="progressbar" data-transitiongoal="90">
                      <span class="au-progress__value js-value"></span>
                    </div>
                  </div>
                </div>
                <div class="au-progress">
                  <span class="au-progress__title">HTML5/CSS3</span>
                  <div class="au-progress__bar">
                    <div class="au-progress__inner js-progressbar-simple" role="progressbar" data-transitiongoal="85">
                      <span class="au-progress__value js-value"></span>
                    </div>
                  </div>
                </div>
                <div class="au-progress">
                  <span class="au-progress__title">WordPress</span>
                  <div class="au-progress__bar">
                    <div class="au-progress__inner js-progressbar-simple" role="progressbar" data-transitiongoal="95">
                      <span class="au-progress__value js-value"></span>
                    </div>
                  </div>
                </div>
                <div class="au-progress">
                  <span class="au-progress__title">Support</span>
                  <div class="au-progress__bar">
                    <div class="au-progress__inner js-progressbar-simple" role="progressbar" data-transitiongoal="95">
                      <span class="au-progress__value js-value"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END TASK PROGRESS-->
          </div>
        </div>
      </div>
    </div>
  </section>


  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright">
            <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END PAGE CONTAINER-->
</div>

@endsection