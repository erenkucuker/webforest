<template>
  <section class="main-section section-2">
    <div class="main-section-title">
      <h1>
        {{$t("section-2-our")}}
        <span class="g-text">{{$t("section-2-services")}}</span>
      </h1>
      <hr class="section-underline g-item" />
    </div>

    <div class="features">
      <div class="feature-title">
        {{$t("section-2-service-title")}}
        <br />
        {{$t("section-2-focus")}}
        <strong>{{$t("section-2-focus-1")}}</strong>,
        <strong>{{$t("section-2-focus-2")}}</strong>,
        <strong>{{$t("section-2-focus-3")}}</strong>,
        <strong>{{$t("section-2-focus-4")}}</strong>
        <br />
        {{$t("section-2-focus-slogan-1")}}
        <strong class="g-text">{{$t("section-2-focus-slogan-2")}}</strong>
        <div class="button-feature">
          <router-link :to="{ name: 'Services' }" class="btn-lg btn-primary pointer">Read More</router-link>
        </div>
      </div>
      <div class="feature-item">
        <i class="fa fa-desktop g-text" aria-hidden="true"></i>
        <h3>{{$t("section-2-feature-title1")}}</h3>
        <p>{{$t("section-2-feature-desc1")}}</p>
      </div>
      <div class="feature-item">
        <i class="fa fa-search g-text" aria-hidden="true"></i>
        <h3>{{$t("section-2-feature-title2")}}</h3>
        <p>{{$t("section-2-feature-desc2")}}</p>
      </div>
      <div class="feature-item">
        <i class="fa fa-tasks g-text" aria-hidden="true"></i>
        <h3>{{$t("section-2-feature-title3")}}</h3>
        <p>{{$t("section-2-feature-desc3")}}</p>
      </div>
      <div class="feature-item">
        <i class="fa fa-bullseye g-text" aria-hidden="true"></i>
        <h3>{{$t("section-2-feature-title4")}}</h3>
        <p>{{$t("section-2-feature-desc4")}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.section-2 {
  display: grid;
  justify-items: center;
  align-items: center;
  min-height: 100vh;
  transition: ease all 1s;
}

.features {
  grid-row: 2/2;
  grid-column: 2/2;
  display: grid;
  grid: 1fr 1fr / 1fr 1fr;
  row-gap: 30px;
  column-gap: 30px;
}

.feature-item {
  display: grid;
  grid: 1fr 1fr / 60px 1fr;
  justify-items: center;
  align-items: center;
}

.feature-item i {
  font-size: 2rem;
  justify-self: start;
}

.feature-item h3 {
  font-size: max(1.5vw, 24px);
  justify-self: start;
}
.feature-item p {
  grid-column: span 2;
  font-size: max(1.1vw, 16px);
}

.feature-title {
  grid-column: span 2;
  font-size: max(1.5vw, 20px);
  align-self: center;
  text-align: center;
  line-height: 2.5rem;
}
.button-feature {
  grid-column: 1/-1;
}
/* MOBILE START */
@media (max-width: 767.98px) {
  .service-title {
    font-size: 1.8rem;
    display: grid;
    align-items: center;
    grid: 1fr / 1fr;
  }

  .features {
    grid: 1fr 1fr 1fr 1fr 1fr / 1fr;
    row-gap: 0;
    justify-items: center;
    text-align: center;
    align-items: center;
  }

  .feature-title {
    grid-column: 1/-1;
  }

  .feature-item {
    height: 50vh;
    grid: 2fr 1fr 2fr / 1fr;
  }
  .feature-item p {
    grid-column: initial;
  }

  .feature-item i {
    justify-self: initial;
  }
  .feature-item h3 {
    justify-self: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>