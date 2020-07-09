<template>
    <section class="page-section section-3 snap-item">
        <div class="news-title-container">
            <div class="news-title">
                <h1>
                    {{ $t("section-3-title-1") }}
                    <span class="g-text">{{ $t("section-3-title-2") }}</span>
                </h1>
                <hr class="section-underline g-item" />
            </div>
        </div>

        <div class="recent-news">
            <div v-for="recentblog in recentBlogs" class="news-item">
                <img src="img/place.png" loading="lazy" alt />
                <h3 class="g-text recent-new-title">{{ recentblog.title }}</h3>
                <hr class="underline-article g-item" />
                <p>{{ recentblog.content | truncateFilter(15) }}</p>
                <div class="news-info">
                    <i class="fa fa-calendar g-text" aria-hidden="true"></i>
                    <span>{{
                        $moment(recentblog.created_at).format("l")
                    }}</span>
                    <i class="fa fa-user g-text" aria-hidden="true"></i>
                    <span>{{ recentblog.author }}</span>
                    <i class="fa fa-tag g-text" aria-hidden="true"></i>
                    <span>{{
                        categories[recentblog.category_id - 1].name
                    }}</span>
                </div>
                <router-link
                    :to="{
                        name: 'BlogDetail',
                        params: { blogId: recentblog.id }
                    }"
                    class="btn-lg btn-primary hvr-back-pulse"
                    >Read More</router-link
                >
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["recentBlogs", "categories"])
    }
};
</script>

<style>
.recent-new-title {
    text-transform: uppercase;
}
.section-3 {
    display: grid;
    grid: 1fr 4fr 1fr /1fr 4fr 1fr;
    justify-items: center;
    align-items: center;
}

.news-title-container {
    font-size: max(2.8vw, 30px);
    grid-row: 1/1;
    grid-column: 2/2;
    padding: 15px;
}

.recent-news {
    grid-row: 2/2;
    grid-column: 2/2;
    display: grid;
    grid: 1fr / auto;
    grid-auto-flow: column;
}

.recent-news img {
    width: 70%;
}

.news-item {
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
    row-gap: 20px;
}

.news-item h3 {
    font-size: 1.8rem;
}

.news-item p {
    font-size: max(1.2vw, 18px);
}

.underline-article {
    width: 80%;
    height: 4px;
}

/*MOBILE START */
@media (max-width: 767.98px) {
    .section-3 {
        grid: 1fr / 1fr;
    }

    .news-title-container {
        height: 50vh;
        display: grid;
        align-items: center;
    }
    .news-title h1 {
        font-size: 1.8rem;
    }

    .news-item h3 {
        font-size: 1.3rem;
    }
    .news-item p {
        font-size: 0.9rem;
    }
    .recent-news img {
        width: 40%;
    }
    .news-item {
        height: 50vh;
        row-gap: initial;
    }
    .recent-news {
        grid: 1fr 1fr 1fr/ 1fr;
    }

    .underline-article {
        height: 3px;
        width: 30%;
    }

    .news-info {
        font-size: 0.6rem;
    }
}
/*MOBILE END */
/*TABLET START */
/*TABLET END */
</style>
