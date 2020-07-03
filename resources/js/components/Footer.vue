<template>
  <section class="footer">
    <div class="footer-info">
      <h4>{{ $t("footer-info") }}</h4>
      <img src="img/logo-alone-min.png" loading="lazy" alt />
      <p>Samplestreet 3 34117 Kassel Germany</p>
      <i class="fa fa-phone g-text" aria-hidden="true"></i>
      <span>+90 312 312 3333</span>

      <p>www.webforest.com</p>
      <p>info@webforest.com</p>
    </div>

    <div class="footer-recent-blog-post">
      <h4>{{ $t("footer-recent-title") }}</h4>
      <div class="blog-post-list">
        <div v-for="recentBlog in recentBlogs" class="blog-post-item">
          {{recentBlog.title}}
          <p v-if="recentBlog.created_at">{{ $moment(recentBlog.created_at).format("LL") }}</p>
        </div>
      </div>
    </div>

    <div class="footer-navigation">
      <h4>{{ $t("footer-navigation") }}</h4>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">
            {{
            $t("Home")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Schedule' }">
            {{
            $t("Schedule")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Services' }">
            {{
            $t("Services")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Portfolio' }">
            {{
            $t("Portfolio")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Blog' }">
            {{
            $t("Blog")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }">
            {{
            $t("Contact us")
            }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["recentBlogs"])
  }
};
</script>

<style>
.footer {
  background-color: #222;
  color: white;
  display: grid;
  grid: 1fr / 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.footer-navigation a {
  color: white;
}

.footer-info img {
  width: 80px;
}

/*MOBILE START */
@media (max-width: 767.98px) {
  .footer {
    grid: 1fr 1fr 1fr / 1fr;
    text-align: center;
  }

  .footer-info {
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    row-gap: 5px;
  }
}
/*MOBILE END */
/*TABLET START */
/*TABLET END */
</style>
