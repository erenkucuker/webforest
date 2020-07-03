<template>
    <section class="page-section portfolio-section">
        <div class="portfolio-cards">
            <div class="portfolio-card">
                <h3>{{ $t("portfolio1-title") }}</h3>
                <p>{{ $t("portfolio1-desc") }}</p>
                <a href>www.portfolio.com</a>
            </div>
            <div class="portfolio-card">
                <h3>{{ $t("portfolio2-title") }}</h3>
                <p>{{ $t("portfolio2-desc") }}</p>
                <a href>www.portfolio.com</a>
            </div>
            <div class="portfolio-card">
                <h3>{{ $t("portfolio3-title") }}</h3>
                <p>{{ $t("portfolio3-desc") }}</p>
                <a href>www.portfolio.com</a>
            </div>
            <div class="portfolio-card">
                <h3>{{ $t("portfolio4-title") }}</h3>
                <p>{{ $t("portfolio4-desc") }}</p>
                <a href>www.portfolio.com</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    metaInfo: {
        titleTemplate: "%s | Portfolio ",
        meta: [
            { name: "description", content: "Page Description" },
            { name: "robots", content: "index, follow" }
        ]
    }
};
</script>

<style>
.portfolio-section {
    display: grid;
}

.portfolio-cards {
    display: grid;
    grid: 1fr 1fr / 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    background-color: white;
}
.portfolio-card {
    font-size: max(1.6vw, 20px);
    background-color: grey;
    color: white;
    height: 300px;
}

/*MOBILE START */
@media (max-width: 767.98px) {
    .portfolio-cards {
        grid: 1fr 1fr 1fr 1fr / 1fr !important;
    }
}
/*MOBILE END */
/*TABLET START */
/*TABLET END */
</style>
