<template>
  <section class="page-section about-section">
    <div class="about-title">
      <h3 class="g-text">{{ $t("about-title") }}</h3>
      <hr class="section-underline g-item" />
    </div>
    <div class="about-description">
      <img src="/img/logo-alone-min.png" alt />
      <p>{{ $t("about-desc") }}</p>
      <router-link :to="{ name: 'Portfolio'}" class="btn-lg btn-primary">{{ $t("about-button1") }}</router-link>
      <router-link :to="{ name: 'Portfolio'}" class="btn-lg btn-primary">{{ $t("about-button2") }}</router-link>
    </div>
    <div id="map" class="google-maps"></div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | About",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.about-section {
  display: grid;
  grid: 1fr 1fr 1fr / 1fr 1fr;
  background-color: white;
  justify-items: center;
  align-items: center;
}
.about-section h3 {
  font-size: max(2.5vw, 25px);
}

.about-section img {
  width: max(10vw, 3vw);
}

.about-title {
  grid-row: span 2;
}
.about-description {
  grid-row: span 2;
  text-align: center;
}
#map {
  grid-column: span 2;
  width: 100%;
  height: 300px;
}
/* MOBILE START */
@media (max-width: 767.98px) {
  .about-section {
    grid: 1fr 1fr 1fr / 1fr;
  }
  .about-title {
    grid-row: initial;
  }
  .about-description {
    grid-row: initial;
  }
  #map {
    grid-column: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
