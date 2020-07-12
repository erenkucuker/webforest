<template>
    <section class="page-section blog-detail-section">
        <div class="blog-container">
            <div class="blog-content-all"></div>
            <div class="blog-header-title">
                <h1 class="blog-detail-title">{{ currentBlog.title }}</h1>
                <hr class="underline-blog g-item" />
            </div>
            <img
                v-bind:src="'/blog_images/' + currentBlog.id + '.jpg'"
                @error="$event.target.src = '/img/place.png'"
            />
            <div v-html="currentBlog.content" class="blog-content"></div>
            <div class="button-back">
                <router-link class="btn-lg btn-primary" :to="{ name: 'Blog' }"
                    >Back</router-link
                >
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    created() {
        this.getCurrentBlog();
    },
    computed: {
        ...mapGetters(["recentBlogs", "categories", "blogs"]),
        blogId() {
            return this.$route.params.blogId;
        }
    },

    data() {
        return {
            blog: [],
            currentBlog: []
        };
    },
    methods: {
        getCurrentBlog() {
            axios
                .get("/api/blogs/details/" + this.blogId)
                .then(response => (this.currentBlog = response.data));
        }
    },

    metaInfo: {
        titleTemplate: "%s | Blog Detail",
        meta: [
            { name: "description", content: "Page Description" },
            { name: "robots", content: "index, follow" }
        ]
    }
};
</script>

<style>
.blog-detail-section {
    display: grid;
    background-color: white;
    min-height: 50vh;
    padding: 25px 0px;
}

.blog-detail-title {
    text-transform: uppercase;
    font-size: max(2.5vw, 24px);
}

.blog-container {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
.blog-container img {
    width: 300px;
    height: 200px;
}
.blog-content {
    word-break: break-all;
    text-align: center;
}

.button-back {
    align-self: end;
}
@media (max-width: 767.98px) {
}
</style>
