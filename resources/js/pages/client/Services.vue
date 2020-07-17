<template>
  <section class="page-section services-section">
    <h3>{{ $t("services-title") }}</h3>
    <div class="service-cards">
      <div class="service-card card-1 hvr-bob">
        <i class="fa fa-desktop" aria-hidden="true"></i>
        <h4>{{ $t("services-card1-title") }}</h4>
        <p>{{ $t("services-card1-desc") }}</p>
        <a
          @click="serviceOpen();card=1;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
      <div class="service-card-overlay" v-bind:class="{ open: isActiveCard }">
        <div class="overlay-menu" v-bind:style="{background:backgroundColorModal}">
          <div v-if="card == 1" class="card-info card-info-1">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card1 Title</h2>
            <img src="/img/webapp.jpg" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
          <div v-if="card == 2" class="card-info card-info-2">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card2 Title</h2>
            <img src="bla.jgp" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
          <div v-if="card == 3" class="card-info card-info-3">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card3 Title</h2>
            <img src="bla.jgp" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
          <div v-if="card == 4" class="card-info card-info-4">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card4 Title</h2>
            <img src="bla.jgp" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
          <div v-if="card == 5" class="card-info card-info-5">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card5 Title</h2>
            <img src="bla.jgp" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
          <div v-if="card == 6" class="card-info card-info-6">
            <i @click="serviceOpen" class="fa fa-times pointer" aria-hidden="true"></i>
            <h2>Card6 Title</h2>
            <img src="bla.jgp" alt />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, est quae laboriosam molestias quam nostrum ipsam ullam nisi obcaecati magni dolorem unde velit et id error voluptates dolor? In vero reiciendis ipsum voluptates! Hic, eveniet numquam saepe quia recusandae dignissimos? Corrupti alias error dolorum facere pariatur, omnis provident possimus quae ipsum nemo rerum soluta similique quis nobis accusantium natus dolorem earum eligendi mollitia dolor unde nam excepturi. Accusamus illum numquam quia minima praesentium ipsum consectetur quis, hic dolor repellendus quaerat voluptatem fugiat, eaque dolore at animi ducimus vitae maiores sit natus ad? Eligendi ratione, quia ipsam necessitatibus accusamus vitae quis!</p>
          </div>
        </div>
      </div>
      <div class="service-card card-2 hvr-bob">
        <i class="fa fa-mobile-alt" aria-hidden="true"></i>
        <h4>{{ $t("services-card2-title") }}</h4>
        <p>{{ $t("services-card2-desc") }}</p>
        <a
          @click="serviceOpen();card=2;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
      <div class="service-card card-3 hvr-bob">
        <i class="fa fa-robot" aria-hidden="true"></i>
        <h4>{{ $t("services-card3-title") }}</h4>
        <p>{{ $t("services-card3-desc") }}</p>
        <a
          @click="serviceOpen();card=3;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
      <div class="service-card card-4 hvr-bob">
        <i class="fa fa-search-dollar" aria-hidden="true"></i>
        <h4>{{ $t("services-card4-title") }}</h4>
        <p>{{ $t("services-card4-desc") }}</p>
        <a
          @click="serviceOpen();card=4;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
      <div class="service-card card-5 hvr-bob">
        <i class="fa fa-bug" aria-hidden="true"></i>
        <h4>{{ $t("services-card5-title") }}</h4>
        <p>{{ $t("services-card5-desc") }}</p>
        <a
          @click="serviceOpen();card=5;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
      <div class="service-card card-6 hvr-bob">
        <i class="fa fa-eye" aria-hidden="true"></i>
        <h4>{{ $t("services-card6-title") }}</h4>
        <p>{{ $t("services-card6-desc") }}</p>
        <a
          @click="serviceOpen();card=6;colorize();"
          class="card-button hvr-shrink pointer"
        >Learn More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActiveCard: false,
      card: 1,
      backgroundColorModal: ""
    };
  },
  methods: {
    serviceOpen: function() {
      this.isActiveCard = !this.isActiveCard;
      if (this.isActiveCard == true) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    },
    colorize() {
      if (this.card == 1) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgba(36, 226, 254, 1) 0%,
      rgba(36, 176, 254, 0.7) 54%,
      rgba(35, 126, 253, 1) 100%
    )`);
      } else if (this.card == 2) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgb(255, 211, 36) 0%,
      rgba(254, 187, 36, 0.7) 54%,
      rgba(253, 163, 35, 0.99) 100%
    )`);
      } else if (this.card == 3) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgba(248, 47, 160, 0.99) 0%,
      rgba(214, 54, 208, 0.7) 54%,
      rgba(180, 61, 255, 0.99) 100%
    )`);
      } else if (this.card == 4) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgba(0, 188, 128, 0.99) 0%,
      rgba(2, 204, 71, 0.7) 54%,
      rgba(3, 220, 13, 0.99) 100%
    )`);
      } else if (this.card == 5) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgba(10, 39, 119, 0.99) 0%,
      rgba(6, 23, 175, 0.7) 54%,
      rgba(97, 87, 233, 0.99) 100%
    )`);
      } else if (this.card == 6) {
        return (this.backgroundColorModal = `linear-gradient(
      -48deg,
      rgba(165, 80, 11, 0.99) 0%,
      rgba(204, 133, 2, 0.7) 54%,
      rgba(226, 111, 16, 0.99) 100%
    )`);
      }
    }
  },
  metaInfo: {
    titleTemplate: "%s | Services ",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.services-section {
  justify-items: center;
}

.services-section h3 {
  font-size: max(3vw, 45px);
}
.service-cards {
  display: grid;
  grid: auto auto / auto auto auto;
  row-gap: 10px;
  column-gap: 10px;
}

.service-cards h4 {
  text-transform: uppercase;
  font-size: max(1.5vw, 30px);
}
.service-cards p {
  font-size: max(1.2vw, 18px);
}

.service-card {
  width: max(30vw, 20vw);
  height: 50vh;
  color: white;
  border-radius: 15px;
  display: grid;
  align-items: center;
  text-align: center;
}
.service-card i {
  font-size: max(6vw, 70px);
  -webkit-text-stroke: 0.008em rgb(255, 255, 255);
}

.card-1 {
  background: linear-gradient(
      -48deg,
      rgba(36, 226, 254, 1) 0%,
      rgba(36, 176, 254, 0.7) 54%,
      rgba(35, 126, 253, 1) 100%
    ),
    url(/img/schedule_img1.png) no-repeat center;
}

.card-2 {
  background: linear-gradient(
      -48deg,
      rgb(255, 211, 36) 0%,
      rgba(254, 187, 36, 0.7) 54%,
      rgba(253, 163, 35, 0.99) 100%
    ),
    url(/img/schedule_img2.jpg) no-repeat center;
}
.card-3 {
  background: linear-gradient(
      -48deg,
      rgba(248, 47, 160, 0.99) 0%,
      rgba(214, 54, 208, 0.7) 54%,
      rgba(180, 61, 255, 0.99) 100%
    ),
    url(/img/schedule_img3.jpg) no-repeat center;
}

.card-4 {
  background: linear-gradient(
      -48deg,
      rgba(0, 188, 128, 0.99) 0%,
      rgba(2, 204, 71, 0.7) 54%,
      rgba(3, 220, 13, 0.99) 100%
    ),
    url(/img/schedule_img4.jpg) no-repeat center;
}
.card-5 {
  background: linear-gradient(
      -48deg,
      rgba(10, 39, 119, 0.99) 0%,
      rgba(6, 23, 175, 0.7) 54%,
      rgba(97, 87, 233, 0.99) 100%
    ),
    url(/img/schedule_img5.jpg) no-repeat center;
}
.card-6 {
  background: linear-gradient(
      -48deg,
      rgba(165, 80, 11, 0.99) 0%,
      rgba(204, 133, 2, 0.7) 54%,
      rgba(226, 111, 16, 0.99) 100%
    ),
    url(/img/schedule_img6.png) no-repeat center;
}
.card-button {
  background-color: transparent;
  border: 2px solid white;
  height: 50px;
  width: 40%;
  text-transform: uppercase;
  justify-self: center;
  text-align: center;
  display: grid;
  align-items: center;
}

.service-card-overlay {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
}
.service-card-overlay.open {
  opacity: 1;
  visibility: visible;
  height: 100%;
  z-index: 5;
}
.service-card-overlay.open .overlay-menu {
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 1;
  display: grid;
  grid: auto / 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.service-card-overlay.open .overlay-menu h2 {
  font-size: max(2.5vw, 42px);
  text-transform: uppercase;
}
.service-card-overlay.open .overlay-menu i {
  font-size: max(2.5vw, 42px);
  color: white;
}
.service-card-overlay.open .overlay-menu img {
  width: 20vw;
  height: 15vh;
}

.service-card-overlay.open .overlay-menu p {
  font-size: max(1.2vw, 16px);
}

.service-card-overlay.open .overlay-menu .card-info {
  grid-column: 2/2;
}

/*MOBILE START */
@media (max-width: 767.98px) {
  .service-card {
    width: max(75vw, 30vw) !important;
  }
  .service-cards {
    grid: 1fr 1fr 1fr 1fr 1fr 1fr / 1fr !important;
  }
}
/*MOBILE END */
/*TABLET START */
@media (max-width: 991.98px) {
  .service-card {
    width: max(45vw, 30vw);
  }

  .service-cards {
    grid: 1fr 1fr 1fr / 1fr 1fr;
  }
}
/*TABLET END */
</style>
