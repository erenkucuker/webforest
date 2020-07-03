<template>
    <section class="page-section services-section">
        <h3>{{ $t("services-title") }}</h3>
        <div class="service-cards">
            <div class="service-card card-1">
                <i class="fa fa-desktop" aria-hidden="true"></i>
                <h4>{{ $t("services-card1-title") }}</h4>
                <p>{{ $t("services-card1-desc") }}</p>
            </div>
            <div class="service-card card-2">
                <i class="fa fa-mobile-alt" aria-hidden="true"></i>
                <h4>{{ $t("services-card2-title") }}</h4>
                <p>{{ $t("services-card2-desc") }}</p>
            </div>
            <div class="service-card card-3">
                <i class="fa fa-robot" aria-hidden="true"></i>
                <h4>{{ $t("services-card3-title") }}</h4>
                <p>{{ $t("services-card3-desc") }}</p>
            </div>
            <div class="service-card card-4">
                <i class="fa fa-search-dollar" aria-hidden="true"></i>
                <h4>{{ $t("services-card4-title") }}</h4>
                <p>{{ $t("services-card4-desc") }}</p>
            </div>
            <div class="service-card card-5">
                <i class="fa fa-bug" aria-hidden="true"></i>
                <h4>{{ $t("services-card5-title") }}</h4>
                <p>{{ $t("services-card5-desc") }}</p>
            </div>
            <div class="service-card card-6">
                <i class="fa fa-eye" aria-hidden="true"></i>
                <h4>{{ $t("services-card6-title") }}</h4>
                <p>{{ $t("services-card6-desc") }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
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
    display: grid;
    background-color: white;
    justify-items: center;
    align-items: center;
}

.services-section h3 {
    font-size: max(3vw, 45px);
}
.service-cards {
    display: grid;
    grid-auto-flow: column;
    grid: 1fr 1fr / 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
}

.service-cards h4 {
    text-transform: uppercase;
    font-size: max(1.5vw, 30px);
}
.service-cards p {
    font-size: max(1vw, 16px);
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
    font-size: max(6vw, 40px);
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
