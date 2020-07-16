<template>
  <section class="page-section about-section">
    <div class="about-title">
      <h3 class="g-text">{{ $t("about-title") }}</h3>
      <hr class="section-underline g-item" />
    </div>

    <video class="video-forest" autoplay="1">
      <source src="video/1.mp4" type="video/mp4" />
    </video>

    <div class="about-description">
      <img src="/img/logo-alone-min.png" alt />
      <p>{{ $t("about-desc") }}</p>

      <div class="buttons-about">
        <router-link :to="{ name: 'Portfolio'}" class="btn-lg btn-primary">{{ $t("about-button1") }}</router-link>
        <router-link :to="{ name: 'Portfolio'}" class="btn-lg btn-primary">{{ $t("about-button2") }}</router-link>
      </div>
    </div>
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
  grid: auto auto auto / 1fr 1fr;
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
  grid-column: span 2;
}
.about-description {
  text-align: center;
}

.video-forest {
  width: 70%;
  border: 2px solid green;
}

/* MOBILE START */
@media (max-width: 767.98px) {
  .about-section {
    grid: auto auto auto / 1fr;
  }
  .about-title {
    grid-row: initial;
  }
  .about-description {
    grid-row: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
