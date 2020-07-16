<template>
  <section class="main-section section-1">
    <div class="title-section">
      <div class="title-section-first">
        <img src="img/logo-alone-min.png" loading="lazy" alt />
        <span class="g-text">ebForest</span>
      </div>
      <div class="title-section-sec">
        {{$t("section-1-title-sec1")}}
        <br />
        <strong>{{$t("section-1-title-sec2")}}</strong>
        <br />
        <strong class="g-text">{{$t("section-1-title-sec3")}}</strong>
        <hr class="section-underline g-item" />
      </div>
    </div>
    <div class="graph-section">
      <div class="graph-item">
        <object id="hel" data="img/macbook.svg" loading="lazy" type="image/svg+xml"></object>
        <h1>{{$t("section-1-title")}}</h1>
        <p>{{$t("section-1-desc")}}</p>
        <router-link
          :to="{ name: 'Services' }"
          class="btn-lg btn-primary hvr-back-pulse"
        >{{$t("section-1-seebutton")}}</router-link>
      </div>
      <div class="graph-item">
        <object id="svg-object" data="img/iphoneanim.svg" type="image/svg+xml" loading="lazy"></object>
        <h1>{{$t("section-2-title")}}</h1>
        <p>{{$t("section-2-desc")}}</p>
        <router-link
          :to="{ name: 'Services' }"
          class="btn-lg btn-primary hvr-back-pulse"
        >{{$t("section-1-seebutton")}}</router-link>
      </div>
      <div class="graph-item">
        <object id="svg-object" data="img/iphoneanim.svg" type="image/svg+xml" loading="lazy"></object>
        <h1>{{$t("section-3-title")}}</h1>
        <p>{{$t("section-3-desc")}}</p>
        <router-link
          :to="{ name: 'Services' }"
          class="btn-lg btn-primary hvr-back-pulse"
        >{{$t("section-1-seebutton")}}</router-link>
      </div>
      <div class="graph-item">
        <object data="img/devdev.svg" type="image/svg+xml" loading="lazy"></object>
        <h1>{{$t("section-4-title")}}</h1>
        <p>{{$t("section-4-desc")}}</p>
        <router-link
          :to="{ name: 'Services' }"
          class="btn-lg btn-primary hvr-back-pulse"
        >{{$t("section-1-seebutton")}}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section-1 {
  min-height: 100vh;
  grid: auto / auto 4fr auto;
  transition: ease all 1s;
}

.section-1 img {
  width: max(5vw, 50px);
}

.title-section {
  display: grid;
  font-family: Oxygen, Helvetica, sans-serif;
  font-size: max(2.5vw, 45px);
  font-weight: 500;
  grid-column: 1 / -1;
  align-items: flex-end;
}

.title-section-first {
  text-align: center;
  grid-column: 1/-1;
  letter-spacing: 6px;
}
.title-section-sec {
  align-self: start;
  text-align: center;
  justify-self: center;
  grid-row: 2/2;
  grid-column: 1/-1;
}

.title-section img {
  justify-self: end;
}

.graph-section {
  grid-column: 1/-1;
  display: grid;
  grid: auto / 1fr 1fr 1fr 1fr;
  column-gap: 0.5vw;
}

.graph-item {
  display: grid;
  font-size: max(0.9vw, 14px);
  align-items: center;
  text-align: center;
}

.graph-item h1 {
  text-transform: uppercase;
}

.graph-item object {
  justify-self: center;
  align-self: center;
  width: max(22vw, 120px);
  height: max(22vh, 120px);
}

/* MOBILE START */
@media (max-width: 767.98px) {
  .section-1 {
    row-gap: initial;
  }

  .title-section-first {
    grid-column: 1/-1;
  }
  .title-section-sec {
    grid-column: 1/-1;
  }

  .graph-section {
    grid: 1fr 1fr 1fr 1fr / 1fr !important;
    height: initial !important;
  }

  .graph-item {
    height: 50vh;
  }
}
/* MOBILE END */
/* TABLET START */
@media (max-width: 991.98px) {
  .title-section {
    font-size: max(4vw, 40px);
    min-height: 50vh;
  }
  .graph-section {
    grid: initial;
    grid: 1fr 1fr / 1fr 1fr;
  }
}
/* TABLET END */
</style>