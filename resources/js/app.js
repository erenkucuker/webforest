window.Vue = require("vue");
window.axios = require("axios");
import VueRouter from "vue-router";
import { routes } from "./routes";
import { filters } from "./filters";
import store from "./store";
import VueAnime from "vue-animejs";
import VueI18n from "vue-i18n";
import us from "./langs/us.json";
import tr from "./langs/tr.json";
import de from "./langs/de.json";
import VueMoment from "vue-moment";
import VueMeta from "vue-meta";
import Vuelidate from "vuelidate";

Vue.use(VueRouter);
Vue.use(VueAnime);
Vue.use(VueI18n);
Vue.use(VueMoment);
Vue.use(VueMeta);
Vue.use(Vuelidate);

Vue.component("App", require("./pages/client/App.vue").default);

Vue.component("navigation-bar", require("./components/Navbar.vue").default);

Vue.component("showcase", require("./components/Showcase.vue").default);

Vue.component("mobile-ham", require("./components/MobileHam.vue").default);

Vue.component("call-action", require("./components/Call-Action.vue").default);

Vue.component("call-action", require("./components/Call-Action.vue").default);

Vue.component("section-1", require("./components/Section1.vue").default);

Vue.component("section-2", require("./components/Section2.vue").default);

Vue.component("section-3", require("./components/Section3.vue").default);

Vue.component("footer-section", require("./components/Footer.vue").default);

Vue.component("breadcrumb", require("./components/Breadcrumb.vue").default);

Vue.component("lang-swap", require("./components/Langswap.vue").default);

Vue.component("form-sche", require("./components/FormSche.vue").default);

Vue.component(
    "modal-subscribe",
    require("./components/ModalSubscribe.vue").default
);

const i18n = new VueI18n({
    locale: "us",
    fallbackLocale: "tr",
    messages: {
        us,
        tr,
        de
    }
});

const router = new VueRouter({
    mode: "history",
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

const app = new Vue({
    el: "#app",
    i18n,
    router,
    store
});
