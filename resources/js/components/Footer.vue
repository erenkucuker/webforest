<template>
  <section class="footer">
    <div class="footer-info">
      <h4>{{ $t("footer-info") }}</h4>

      <router-link
        class="pointer"
        :to="{ name: 'Home' }"
        tag="img"
        src="img/logo-alone-min.png"
        loading="lazy"
      ></router-link>

      <span>
        <i class="fa fa-globe g-text" aria-hidden="true"></i>www.webforest.org
      </span>

      <span>
        <i class="fa fa-envelope g-text" aria-hidden="true"></i>info@webforest.org
      </span>

      <span>
        <i class="fa fa-map-marker g-text" aria-hidden="true"></i>
        Istanbul Yolu Cankaya Ankara,Turkey
      </span>
      <span>
        <i class="fa fa-phone g-text" aria-hidden="true"></i>
        +1-202-555-0169
      </span>
    </div>

    <div class="footer-recent-blog-post">
      <h4>{{ $t("footer-recent-title") }}</h4>
      <div class="blog-post-list">
        <div v-for="(recentBlog,index) in recentBlogs" :key="index" class="blog-post-item">
          <router-link
            :to="{ name: 'BlogDetail', params: { blogId: recentBlog.id } }"
            class="link pointer"
          >
            {{ recentBlog.title }}
            <p v-if="recentBlog.created_at">{{ $moment(recentBlog.created_at).format("LL") }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="footer-navigation">
      <h4>{{ $t("footer-navigation") }}</h4>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }" class="link pointer">
            {{
            $t("Home")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Schedule' }" class="link pointer">
            {{
            $t("Schedule")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Services' }" class="link pointer">
            {{
            $t("Services")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Portfolio' }" class="link pointer">
            {{
            $t("Portfolio")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Blog' }" class="link pointer">
            {{
            $t("Blog")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" class="link pointer">
            {{
            $t("Contact us")
            }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="subscribe-container">
      <h3>SUBSCRIBE</h3>

      <div class="subscribe-form">
        <form action>
          <span>
            Don’t miss to subscribe to our new feeds, kindly fill
            the form below.
          </span>
          <input type="text" placeholder="Email Address" />
          <button class="btn-primary">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="social-link">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-skype"></i>
    </div>
    <div class="copyright-container">
      <div>Copyright © 2020, All Right Reserved by Webforest Company Ltd.</div>

      <ul>
        <li>
          <a class="link pointer">Privacy Policy</a>
        </li>
        <li>
          <a class="link pointer">Sitemap</a>
        </li>
        <li>
          <a class="link pointer">Copyright Policy</a>
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
  grid: auto auto auto / 1fr 1fr 1fr;
  justify-items: center;
  align-items: stretch;
  text-align: center;
  padding: 25px;
  box-shadow: 0px -12px 85px -7px rgba(0, 0, 0, 0.35);
  row-gap: 20px;
}
.footer h4 {
  position: relative;
}

.footer h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 3px;
  width: 100%;
  background: -webkit-linear-gradient(
    var(--gradient-color1),
    var(--gradient-color2)
  );
}
.footer-navigation ul li {
  padding: 6px 0px;
}
.footer-navigation a {
  color: #237a57;
  text-transform: uppercase;
}

.footer-info {
  display: grid;
  justify-items: center;
  row-gap: 6px;
}

.footer-info span {
  display: grid;
  grid-auto-flow: column;
  column-gap: 6px;
  align-items: center;
  align-content: center;
}

.footer-info img {
  width: 80px;
}

.blog-post-item {
  text-transform: uppercase;
  padding: 4px 0px;
  color: #237a57;
}

.subscribe-container {
  display: grid;
  grid-auto-flow: row;
  align-items: stretch;
  grid-column: 1/-1;
}
.copyright-container {
  grid-column: 1/-1;
  align-items: center;
}
.copyright-container div {
  font-weight: 600;
}
.copyright-container ul {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  column-gap: 8px;
}
.subscribe-form input {
  height: 40px;
  width: 80%;
  color: green;
  border: 2px solid green;
  padding-left: 5px;
}
.subscribe-form button {
  height: 40px;
  width: 15%;
}
.subscribe-form button i {
  color: white;
}

.social-link {
  color: #797878;
  display: grid;
  grid-column: 1/-1;
  grid-auto-flow: column;
  column-gap: 15vw;
  font-size: max(2.1vw, 24px);
  padding: 35px 0;
}
.social-link i {
  cursor: pointer;
}
.social-link i:hover {
  color: #237a57;
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
