<template>
  <div class="breadcrumb">
    <router-link class="pointer" :to="{ name: 'Home' }" tag="img" src="/img/logo-alone-min.png" />
    <h3>{{ $route.name }}</h3>

    <h5 class="g-text">Home / {{ $route.name }}</h5>
    <div class="button-set-crumb">
      <button class="btn-nav-back btn-primary pointer hvr-shrink" @click="$router.go(-1)">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button class="btn-nav-back btn-primary pointer hvr-shrink" @click="$router.go(1)">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.breadcrumb {
  background: linear-gradient(
    300deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(20, 20, 20, 1) 70%
  );
  color: white;
  display: grid;
  grid: 1fr 1fr 1fr /1fr 3fr 1fr;
  box-shadow: inset 0px 0px 5px 6px rgba(0, 0, 0, 0.75);
  justify-items: center;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
  border-top: 2px solid green;
  border-bottom: 2px solid green;
}

.breadcrumb h5 {
  grid-column: span 3;
  font-size: max(1.2vw, 14px);
  align-self: center;
}
.breadcrumb h3 {
  font-size: max(2vw, 35px);
  grid-column: span 3;
  align-self: center;
  text-transform: uppercase;
  text-shadow: 20px 12px 10px rgb(0, 0, 0);
}

.breadcrumb img {
  display: none;
  width: max(15vw, 40px);
}
.btn-nav-back {
  width: 50px;
  height: 30px;
  color: white;
  box-shadow: 20px 12px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
}
.button-set-crumb {
  grid-column: span 3;
}

/*MOBILE START */
@media (max-width: 767.98px) {
  .breadcrumb {
    display: grid;
    justify-items: center;
    border-top: none;
  }
  .breadcrumb img {
    display: grid;
    grid-column: span 3;
    justify-self: center;
    align-items: center;
  }
}
/*MOBILE END */
/*TABLET START */
/*TABLET END */
</style>
