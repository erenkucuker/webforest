<template>
  <section class="footer main-section">
    <div class="footer-top">
      <div class="footer-recent-blog-post">
        <h4>{{ $t("footer-recent-title") }}</h4>
        <div class="blog-post-list">
          <div v-for="(recentBlog, index) in recentBlogs" :key="index" class="blog-post-item">
            <router-link
              :to="{
                            name: 'BlogDetail',
                            params: { blogId: recentBlog.id }
                        }"
              class="link pointer"
            >
              {{ recentBlog.title }}
              <p v-if="recentBlog.created_at">{{ $moment(recentBlog.created_at).format("LL") }}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="footer-info">
        <h4>{{ $t("footer-info") }}</h4>

        <router-link
          class="pointer"
          :to="{ name: 'Home' }"
          tag="img"
          src="/img/logo-alone-min.png"
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

      <div class="footer-navigation">
        <h4>{{ $t("footer-navigation") }}</h4>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }" class="link pointer">{{ $t("Home") }}</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Schedule' }" class="link pointer">{{ $t("Schedule") }}</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Services' }" class="link pointer">{{ $t("Services") }}</router-link>
          </li>
          <!-- <li>
          <router-link :to="{ name: 'Portfolio' }" class="link pointer">
            {{
            $t("Portfolio")
            }}
          </router-link>
          </li>-->
          <li>
            <router-link :to="{ name: 'Blog' }" class="link pointer">{{ $t("Blog") }}</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" class="link pointer">{{ $t("Contact us") }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="social-link-container">
      <h4>SOCIAL LINKS</h4>
      <div class="social-link">
        <a href="https://www.facebook.com/Webforest-Software-Development-114480526999770/">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com/in/webforest">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/WebForest3">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCGsSUb3-1gggf7QfFPB3aHg">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="live:.cid.aeda50c8b8edb201">
          <i class="fab fa-skype"></i>
        </a>
      </div>
    </div>

    <div class="copyright-container">
      <div>Copyright © 2020, All Right Reserved by Webforest Company Ltd.</div>

      <ul>
        <li @click="toggleNews()" class="link pointer">Newsletter</li>
        <li>
          <router-link :to="{ name: 'Privacy Policy' }" class="link pointer">Privacy Policy</router-link>
        </li>
        <li>
          <a class="link pointer">Sitemap</a>
        </li>
        <li>
          <router-link :to="{ name: 'Disclaimer Policy' }" class="link pointer">Disclaimer Policy</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      formEmail: "",
      errormessage: "",
      errortype: ""
    };
  },
  methods: {
    toggleNews() {
      this.$store.commit("toggleNewsletter");
    },
    postSubscribe() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.errormessage = "Please enter a valid email address.";
        this.errortype = "error";
      } else {
        axios
          .post("/api/subscribe", {
            email: this.formEmail
          })
          .then(
            response => (
              (this.errormessage = response.data.message),
              (this.errortype = response.data.classtype)
            )
          );
      }
    },
    sendMailReply() {
      axios.get("/api/sendmail/" + this.formEmail);
    }
  },

  computed: {
    ...mapGetters(["recentBlogs"])
  },
  validations: {
    formEmail: {
      email
    }
  }
};
</script>

<style>
.footer {
  background-color: #222;
  color: white;
  display: grid;
  justify-items: center;
  align-items: stretch;
  text-align: center;
  box-shadow: 0px -12px 85px -7px rgba(0, 0, 0, 0.35);
  grid: auto / 1fr 4fr 1fr;
  transition: ease all 1s;
}

.footer-top {
  display: grid;
  grid-auto-flow: column;
  justify-self: stretch;
  grid-column: 1/-1;
}

.footer-navigation {
  display: grid;
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
}

.footer-info span {
  display: grid;
  grid-auto-flow: column;
  column-gap: 6px;
  align-items: center;
  white-space: nowrap;
}

.footer-info img {
  width: 50px;
}

.footer-recent-blog-post {
  display: grid;
}

.blog-post-item {
  text-transform: uppercase;
  padding: 4px 0px;
  color: #237a57;
}

.subscribe-container {
  display: grid;
  grid-auto-flow: row;
  justify-items: stretch;
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
  color: green;
  border: 2px solid green;
  padding-left: 5px;
}

.btn-subscribe {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.social-link {
  color: #797878;
  font-size: max(1.8vw, 20px);
  display: grid;
  grid-auto-flow: column;
  column-gap: 10vw;
}

.social-link i {
  cursor: pointer;
}
.social-link i:hover {
  color: #237a57;
}

.social-link-container {
  padding: 35px 0;
  grid-column: 2/2;
}

/*MOBILE START */
@media (max-width: 767.98px) {
  .footer-top {
    grid-auto-flow: row;
    row-gap: 40px;
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
