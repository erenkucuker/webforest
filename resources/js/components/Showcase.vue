<template>
  <section class="showcase">
    <div class="showcase-items">
      <h3>{{$t("showcase-title")}}</h3>
      <h1>{{$t("showcase-title2")}}</h1>
      <div class="anim-container ml4">
        <span class="animated-content-text">{{$t("animated-text1")}}</span>
        <span class="letters letters-1">{{$t("anime-text1")}}</span>
        <span class="letters letters-2">{{$t("anime-text2")}}</span>
        <span class="letters letters-3">{{$t("anime-text3")}}</span>
        <span class="anim-content-min-text">{{$t("animated-text2")}}</span>
      </div>
      <router-link
        class="btn-lg btn-primary-header"
        :to="{ name: 'Services' }"
      >{{$t("showcase-button")}}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const targets = this.$el;
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 2;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;
    this.$anime
      .timeline({ loop: true })
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      });
    window.onload = function() {
      const svg = document.querySelector("#hel");
      const textanimatedsvg = svg.contentDocument.querySelector("#stext");
      const textanimatedsvg2 = svg.contentDocument.querySelector("#stext2");
      new TypeIt(textanimatedsvg, {
        speed: 150,
        waitUntilVisible: true,
        loop: true
      })
        .type("Maravel")
        .move(-6)
        .delete(1)
        .type("L")
        .move(6)
        .break({ delay: 500 })
        .type(" , Node Js eyc.")
        .pause(300)
        .delete(3)
        .type("tc.")
        .move(-4)
        .pause(7500)
        .go();
      new TypeIt(textanimatedsvg2, {
        speed: 250,
        waitUntilVisible: true,
        loop: true
      })
        .pause(8000)
        .type("All modern web technologies")
        .go();
    };
  }
};
</script>

<style>
.showcase {
  background: linear-gradient(to left, rgb(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/img/header-min.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: grid;
  grid: 1fr 5fr 70px / 3fr;
  justify-items: center;
  text-align: center;
  box-shadow: inset -4px 36px 28px -14px rgba(0, 0, 0, 0.7);
  height: 90vh;
  transition: ease all 1s;
}

.showcase-items {
  grid-row: 2/2;
  display: grid;
  row-gap: 30px;
  justify-items: center;
}

.showcase-items h1 {
  color: white;
  font-size: max(4vw, 55px);
  font-weight: 700;
}

.showcase-items h3 {
  color: white;
  font-size: max(2.5vw, 45px);
  font-weight: 400;
}

.showcase-items .anim-container div {
  display: inline;
}

.showcase-items .anim-container ul {
  display: inline;
}

.showcase-items .anim-container li {
  display: inline;
}

.anim-container {
  display: grid;
  grid-auto-flow: row;
  font-size: max(2vw, 25px);
  color: white;
  justify-self: center;
  justify-items: center;
  align-items: center;
  white-space: nowrap;
  column-gap: 10px;
  row-gap: 10px;
}

.ml4 {
  opacity: 1;
  display: grid;
}

.ml4 .letters {
  grid-row: 2/2;
  grid-column: 1/1;
  justify-self: center;
  align-self: center;
  opacity: 1;
  font-size: max(2vw, 25px);
  color: #237a57;
  text-shadow: 0 1px 2px #237a57, 0 0 5em white, 0 0 0.9em white;
}

/* MOBILE START*/
@media (max-width: 767.98px) {
  .showcase {
    height: 100vh;
    grid: 1fr 5fr 1fr / 1fr;
  }
  .showcase-items {
    text-align: center;
  }
  .anim-container {
    grid: 1fr / 1fr;
    column-gap: 0;
    justify-items: center;
  }

  .anim-content-text {
    grid: initial;
    white-space: normal;
    grid-column: 1/-1;
    font-size: 4vw;
  }

  .ml4 .letters {
    font-size: 4vw;
  }
}
/* MOBILE END*/

/* TABLET START*/
@media (max-width: 991.98px) {
  .showcase-items h3 {
    font-size: max(4vw, 30px);
  }
  .anim-content-text {
    font-size: max(3.5vw, 20px);
  }

  .ml4 .letters {
    font-size: max(3.5vw, 20px);
  }
}
/* TABLET END*/
</style>
