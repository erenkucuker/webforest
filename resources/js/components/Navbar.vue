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
      <!-- <li class="hvr-underline-from-left">
        <router-link class="nav-item-st" :to="{ name: 'Portfolio' }">
          {{
          $t("Portfolio")
          }}
        </router-link>
      </li>-->
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
export default {};
</script>

<style>
/* navbar start*/
.navbar {
  display: grid;
  grid: 1fr / 1fr 8fr 1fr;
  align-items: center;
  justify-items: center;
  height: 10vh;
  background-color: white;
  padding: 0 25px;
}

.navbar ul {
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  column-gap: 25px;
}

.navbar img {
  width: 8vw;
  min-width: 120px;
  cursor: pointer;
}

.nav-menu li {
  width: 100%;
  height: 100%;
}

.nav-menu li a {
  width: 100%;
  height: 100%;
  font-size: max(0.8vw, 12px);
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
  .nav-menu li a {
    font-weight: 400;
  }
}

/* NAVBAR TABLET END */
</style>
