<template>
  <nav class="navbar">
    <router-link
      class="nav-item-st"
      :to="{ name: 'Home' }"
      tag="img"
      loading="lazy"
      src="/img/header-logo-min.png"
    ></router-link>

    <ul class="nav-menu">
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Home' }">
          {{
          $t("Home")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Schedule' }">
          {{
          $t("Schedule")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Services' }">
          {{
          $t("Services")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Portfolio' }">
          {{
          $t("Portfolio")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Blog' }">
          {{
          $t("Blog")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'About' }">
          {{
          $t("About")
          }}
        </router-link>
      </li>
      <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Contact' }">
          {{
          $t("Contact us")
          }}
        </router-link>
      </li>
    </ul>
    <lang-swap></lang-swap>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActiveLang: false,
      currentLanguageShort: "us",
      langClass: "flag-icon-",
      testdata: ""
    };
  },
  methods: {
    LanguageOption: function() {
      this.isActiveLang = !this.isActiveLang;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.currentLanguageShort = locale;
    },
    currentLang() {
      if (this.currentLanguageShort == "us") {
        return "English";
      } else if (this.currentLanguageShort == "tr") {
        return "Turkish";
      } else if (this.currentLanguageShort == "tr") {
        return "Turkish";
      } else if (this.currentLanguageShort == "de") {
        return "German";
      }
    }
  }
};
</script>

<style>
/* navbar start*/
.navbar {
  grid-column: 1 / -1;
  display: grid;
  grid: 1fr / 1fr 7fr 1fr;
  align-items: center;
  justify-items: center;
  height: 10vh;
  background-color: white;
  box-shadow: 0px 17px 30px 0px rgba(0, 0, 0, 0.98);
}

.navbar img {
  grid-row: 1/1;
  grid-column: 1/1;
}

.navbar ul {
  display: grid;
  grid: 1fr / repeat(7, 1fr);
  grid-row: 1/1;
  grid-column: 2/2;
  text-align: center;
}

.navbar img {
  width: 8vw;
  cursor: pointer;
}

.nav-menu li {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
}

.nav-menu li a {
  width: 100%;
  height: 100%;
  font-size: max(0.8vw, 12px);
  font-weight: 600;
  color: #237a57;
  font-family: "Oxygen", serif;
  display: inline-block;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* NAVBAR END */

/* NAVBAR MOBILE START */
@media (max-width: 767.98px) {
  .navbar {
    display: none;
  }
}
/* NAVBAR MOBILE END */
/*NAVBAR TABLET START*/

@media (max-width: 991.98px) {
  .navbar ul {
    grid: 1fr / repeat(7, 1fr);
  }
  .nav-menu li a {
    font-size: max(1.5vw, 0.8vw);
    font-weight: 400;
  }
  .nav-menu li p {
    font-size: 1.2vw;
    font-weight: 600;
  }
}

/* NAVBAR TABLET END */
</style>
