<template>
  <section class="page-section blog-section">
    <div class="blog-news">
      <div v-for="(blog, index) in paginatedBlogs" :key="index" class="blog-item">
        <img
          v-bind:src="'/blog_images/' + blog.id + '.jpg'"
          @error="$event.target.src = '/img/place.png'"
        />
        <h3 class="blog-item-title g-text">{{ blog.title }}</h3>
        <hr class="underline-blog g-item" />
        <p>{{ blog.content | deleteHtmlTags | truncateFilter(50) }}</p>
        <div class="blog-info">
          <i v-if="blog.updated_at" class="fa fa-calendar g-text" aria-hidden="true"></i>
          <span v-if="blog.created_at">{{ $moment(blog.created_at).format("l") }}</span>

          <i class="fa fa-user g-text" aria-hidden="true"></i>
          <span>{{ blog.author }}</span>
          <i class="fa fa-tag g-text" aria-hidden="true"></i>

          <span class="blog-item-category">{{ categories[blog.category_id - 1].name }}</span>
        </div>
        <div class="blog-detail-button">
          <router-link
            tag="span"
            :to="{ name: 'Blog Detail', params: { blogId: blog.id } }"
            class="btn-lg btn-primary hvr-back-pulse pointer"
          >Read More</router-link>
          <span @click="shareToggle(blog.id)" class="btn-primary pointer">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
            Share
          </span>
        </div>
        <div v-if="showToggle && clickedToggle == blog.id" class="social-links">
          <i @click="goShare('linkedin',blog.id)" class="fab fa-linkedin linkedin fa-2x pointer"></i>
          <i @click="goShare('facebook',blog.id)" class="fab fa-facebook facebook fa-2x pointer"></i>
          <i @click="goShare('twitter',blog.id)" class="fab fa-twitter twitter fa-2x pointer"></i>
          <i @click="goShare('mail',blog.id)" class="fa fa-envelope opera fa-2x pointer"></i>
        </div>
      </div>

      <div class="pagination">
        <button class="btn-lg btn-primary" v-if="currentPage > 1" @click="prevPage()">Previous</button>
        <button
          v-if="totalPages > 1"
          @click="pageSwitcher(number)"
          v-for="number in totalPages"
          class="btn-primary"
          :class="{ 'active-page': currentPage == number }"
        >{{ number }}</button>
        <button class="btn-lg btn-primary" v-if="currentPage < totalPages" @click="nextPage()">Next</button>
      </div>
    </div>
    <div class="blog-tabs">
      <div class="blog-tab-container">
        <div class="blog-search-container">
          <input type="text" placeholder="Search..." v-model="searchKeyword" />
          <span>
            <button>
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>

        <div class="blog-category-list">
          <h3 class="g-text blog-category-title">{{ $t("blog-title") }}</h3>
          <div v-for="category in categories" class="blog-category-item">
            <div @click="categorySwitcher(category.id)" class="category-click">
              <i v-if="category.id != activeFilter" class="fa fa-caret-right"></i>
              <span>{{ category.name }}</span>
            </div>
            <i v-if="category.id == activeFilter" @click="categoryReset" class="fa fa-window-close"></i>
          </div>
        </div>
        <hr class="g-item blog-break-line" />
        <div class="recent-post-list">
          <h3 class="g-text">{{ $t("blog-recent-title") }}</h3>
          <router-link
            :to="{
                            name: 'Blog Detail',
                            params: { blogId: recentBlog.id }
                        }"
            tag="div"
            v-for="recentBlog in recentBlogs"
            :key="recentBlog.id"
            class="post-list-item"
          >
            <img
              v-bind:src="'blog_images/' + recentBlog.id + '.jpg'"
              @error="$event.target.src = 'img/place.png'"
            />
            <p>{{ recentBlog.title }}</p>
          </router-link>
        </div>
        <hr class="g-item blog-break-line" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.setTotalPages();
  },
  computed: {
    ...mapGetters(["recentBlogs", "categories", "blogs"]),

    filteredBlogs() {
      var vm = this;
      if (vm.activeFilter > 0) {
        let filtereddata = this.blogs.filter(
          p => p.category_id == vm.activeFilter
        );
        let filteredreversedata = filtereddata.reverse();
        let searchedandfiltered = filteredreversedata.filter(p =>
          p.content.includes(vm.searchKeyword)
        );
        return searchedandfiltered;
      } else {
        let searchedandfiltered = this.blogs.filter(p =>
          p.content.includes(vm.searchKeyword)
        );
        return searchedandfiltered.reverse();
      }
    },
    paginatedBlogs() {
      var vm = this;
      let start = (this.currentPage - 1) * this.itemPerPage,
        end = start + this.itemPerPage;
      let paginatedBlog = this.filteredBlogs.slice(start, end);
      return paginatedBlog;
    }
  },
  data() {
    return {
      totalPages: [],
      itemPerPage: 3,
      currentPage: 1,
      activeFilter: 0,
      searchKeyword: "",
      clickedToggle: 0,
      showToggle: false,
      baseurl: process.env.MIX_APP_URL
    };
  },
  watch: {
    filteredBlogs() {
      this.setTotalPages();
    }
  },

  methods: {
    setTotalPages() {
      var vm = this;
      vm.totalPages = Math.ceil(vm.filteredBlogs.length / vm.itemPerPage);
    },
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },

    pageSwitcher(pagenum) {
      this.currentPage = pagenum;
    },
    categorySwitcher(num) {
      this.activeFilter = num;
    },
    categoryReset() {
      this.activeFilter = 0;
    },
    shareToggle(val) {
      this.clickedToggle = val;
      this.showToggle = !this.showToggle;
    },
    goShare(socialplat, blogId) {
      let route = this.$router.resolve({
        name: "Blog Detail",
        params: blogId
      });
      if (socialplat == "facebook") {
        let facebookshare = "https://www.facebook.com/sharer/sharer.php?u=";
        window.open(facebookshare + this.baseurl + route.href, "_blank");
      } else if (socialplat == "linkedin") {
        let linkedinurl =
          "https://www.linkedin.com/sharing/share-offsite/?url=";
        window.open(linkedinurl + this.baseurl + route.href, "_blank");
      } else if (socialplat == "twitter") {
        let twitterurl = "https://twitter.com/home?status=";
        window.open(twitterurl + this.baseurl + route.href, "_blank");
      } else if (socialplat == "mail") {
        window.open(
          "mailto:pleaseenter@mail.com?subject=Do you wanna check this out &body=" +
            this.baseurl +
            route.href,
          "_blank"
        );
      }
    }
  },
  metaInfo: {
    titleTemplate: "%s | Blog ",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.pagination {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: end;
}

.blog-section {
  display: grid;
  grid: 1fr /1fr 8fr 1fr;
  row-gap: 20px;
  background-color: white;
  min-height: 90vh;
  padding: 25px 0px;
}
.blog-news {
  display: grid;
  grid-column: 2/2;
  row-gap: 10px;
}
.blog-item {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  word-wrap: break-word;
  row-gap: 20px;
}
.blog-item img {
  width: 350px;
  height: 230px;
}
.blog-item-title {
  text-transform: uppercase;
}

.underline-blog {
  height: 4px;
  width: 20%;
}

.blog-tabs {
  background-color: white;
}
.blog-tabs h3 {
  font-size: 30px;
}
.blog-tabs .minimize {
  display: grid;
  color: green;
}

.blog-tabs input {
  border: none;
  width: 80%;
  height: 50px;
  border-color: green;
  color: green;
  font-size: 16px;
  border-bottom: 2px solid green;
}
.blog-tabs button {
  width: 15%;
  height: 50px;
  border-color: var(--gradient-color2);
  color: white;
  background-color: var(--gradient-color2);
}

.recent-post-list {
  display: grid;
  row-gap: 5vh;
  align-items: center;
  align-content: center;
}
.recent-post-list img {
  width: 70px;
  height: 50px;
}

.post-list-item {
  display: grid;
  align-items: center;
  grid: auto / auto auto;
  cursor: pointer;
}

.post-list-item p {
  color: green;
  font-weight: 600;
}

.blog-category-list {
  display: grid;
  row-gap: 5px;
  color: green;
  font-size: 18px;
}
.blog-category-item {
  text-transform: uppercase;
  cursor: pointer;
}

.blog-item-category {
  text-transform: capitalize;
}

.active-page {
  background-color: var(--gradient-color2);
  color: white;
}

.category-click {
  display: inline;
}
.blog-break-line {
  color: green;
  height: 2px;
}
.blog-tab-container {
  display: grid;
  row-gap: 25px;
}

.social-links {
  -webkit-animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.blog-detail-button {
  display: grid;
  grid-auto-flow: column;
}

/* MOBILE START */
@media (max-width: 767.98px) {
  .blog-section {
    grid: auto auto / auto;
    row-gap: 20px;
  }
  .blog-tabs {
    grid-row: 1;
  }
  .recent-post-list {
    justify-content: center;
  }
  .blog-category-list {
    grid-auto-flow: column;
    justify-items: center;
  }
  .blog-category-title {
    text-align: center;
  }
  .post-list-item {
    column-gap: 10px;
  }
  .blog-tab-container {
    display: grid;
    row-gap: 25px;
  }
  .blog-news {
    grid-column: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
