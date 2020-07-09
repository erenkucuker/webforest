window.Vue = require("vue");
window.axios = require("axios");
import VueRouter from "vue-router";
import { routes } from "./routes";
import { filters } from "./filters";
import store from "./store";
import { defaultsDeep } from "lodash";
import VueAnime from "vue-animejs";
import VueI18n from "vue-i18n";
import { lang } from "./lang";
import us from "./langs/us.json";
import tr from "./langs/tr.json";
import de from "./langs/de.json";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import VueUploadComponent from "vue-upload-component";
import VueMoment from "vue-moment";
import VueMeta from "vue-meta";
import VueTheMask from "vue-the-mask";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Vuelidate from "vuelidate";
import CoreuiVue from "@coreui/vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.use(VueRouter);
Vue.use(VueAnime);
Vue.use(VueI18n);
Vue.use(VueMoment);
Vue.use(VueMeta);
Vue.use(VueTheMask);
Vue.use(Vuelidate);
Vue.use(CoreuiVue);

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

Vue.component("schedule-form", require("./components/Form-Sche.vue").default);

Vue.component("date-time-picker", VueCtkDateTimePicker);

Vue.component("file-upload", VueUploadComponent);

Vue.component("phone-num-input", VuePhoneNumberInput);
Vue.component("v-select", vSelect);

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
    routes: routes
});

const app = new Vue({
    el: "#app",
    i18n,
    router,
    store
});
