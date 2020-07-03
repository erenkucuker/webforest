<template>
  <section class="call-action">
    <p>
      {{$t("Call-action")}}
      <span class="g-text">{{$t("Call-action-2")}}</span>
    </p>
    <div class="call-action-sec">
      <router-link
        class="btn-exp btn-primary hvr-shrink"
        :to="{ name: 'Schedule' }"
      >{{$t("action-button")}}</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.call-action {
  color: white;
  background: var(--theme-black);
  display: grid;
  grid: 1fr / 1fr 1fr 1fr;
  align-items: center;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.78);
  height: 10vh;
}

.call-action .call-action-sec {
  grid-column: 3/3;
  text-align: center;
}

.call-action p {
  justify-self: end;
}

/* MOBILE START */
@media (max-width: 767.98px) {
  .call-action {
    height: 10vh;
    grid: 1fr / 4fr 1fr 4fr;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
