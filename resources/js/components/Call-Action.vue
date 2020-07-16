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
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  padding: 0px 25px;
  grid-auto-flow: column;
}

/* MOBILE START */
@media (max-width: 767.98px) {
  .call-action {
    height: 10vh;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
