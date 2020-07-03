<template>
  <section class="page-section blog-detail-section">
    <div class="blog-container">
      <h3 class="blog-detail-title">{{ currentBlog.title }}</h3>
      <hr class="underline-blog g-item" />
      <img :src="currentBlog.image_path" />
      <div v-html="currentBlog.content" class="blog-content"></div>
      <div class="button-back">
        <router-link class="btn-lg btn-primary" :to="{name:'Blog'}">Back</router-link>
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
  min-height: 100vh;
}

.blog-detail-title {
  text-transform: uppercase;
}

.blog-container {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
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
