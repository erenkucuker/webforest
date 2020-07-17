<template>
  <div @click="LanguageOption()" class="lang-swap hvr-icon-hang">
    <span class="flag-icon flag-icon-squared" v-bind:class="[langClass+currentLanguageShort]"></span>
    <p class="g-text">{{currentLang()}}</p>
    <i class="fa fa-caret-down fa-lg hvr-icon g-text" aria-hidden="true"></i>
    <div class="dropdown-content" v-bind:class="{ 'dropdown-active': isActiveLang }">
      <div @click="setLocale('tr')" class="dropdown-item">
        <span class="flag-icon flag-icon-tr flag-icon-squared"></span>
        <p>{{$t("Turkish")}}</p>
      </div>
      <div @click="setLocale('us')" class="dropdown-item">
        <span class="flag-icon flag-icon-us flag-icon-squared"></span>
        <p>{{$t("English")}}</p>
      </div>
      <div @click="setLocale('de')" class="dropdown-item">
        <span class="flag-icon flag-icon-de flag-icon-squared"></span>
        <p>{{$t("German")}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveLang: false,
      currentLanguageShort: "us",
      langClass: "flag-icon-"
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
.lang-swap {
  display: grid;
  grid: 1fr 1fr / 1fr 15px;
  justify-items: center;
  align-items: center;
  padding: 6px 18px;
  cursor: pointer;
  position: relative;
}

.lang-swap span {
  grid-row: 1/1;
  grid-column: 1/1;
}
.lang-swap p {
  grid-row: 2/2;
}
.lang-swap i {
  grid-row: 1/-1;
  grid-column: 2/2;
}
.dropdown-content {
  display: none;
  text-align: center;
  position: absolute;
  top: 74px;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  padding: 0 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  z-index: 3;
}

.dropdown-active {
  display: grid;
}

.dropdown-item {
  display: grid;
  row-gap: 5px;
  justify-items: center;
  align-items: center;
  grid: 1fr 1fr 1fr / 1fr;
}

.dropdown-item span {
  margin-top: 5px;
}

@media (max-width: 767.98px) {
  .dropdown-content {
    position: initial;
  }
}
</style>