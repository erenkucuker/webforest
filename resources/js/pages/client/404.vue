<template>
  <div class="ErrorPage">
    <h1 class="g-text">Oooops !</h1>
    <i class="fa fa-exclamation-circle g-text" aria-hidden="true"></i>
    <h3 class="g-text">We couldn't find this page.</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ErrorPage {
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: white;
  text-transform: uppercase;
}
.ErrorPage h1 {
  font-size: 8vw;
}
.ErrorPage i {
  font-size: 6vw;
}
.ErrorPage h3 {
  font-size: 3vw;
}
</style>