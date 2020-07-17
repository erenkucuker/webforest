import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        blogs: [],
        recentBlogs: [],
        showModalNewsletter: false
    },

    mutations: {
        toggleNewsletter(state) {
            state.showModalNewsletter = !state.showModalNewsletter;
            console.log("clicked");
        },
        getAllBlogs(state) {
            axios
                .get("/api/blogs")
                .then(response => (state.blogs = response.data));
        },
        getRecentBlogs(state) {
            axios
                .get("/api/blogs/recent-blogs")
                .then(response => (state.recentBlogs = response.data));
        },
        getAllCategories(state) {
            axios
                .get("/api/blogs/categories")
                .then(response => (state.categories = response.data));
        }
    },
    actions: {},
    getters: {
        blogs: state => {
            return state.blogs;
        },
        categories: state => {
            return state.categories;
        },
        recentBlogs: state => {
            return state.recentBlogs;
        },
        currentBlog: state => {
            return state.currentBlog;
        }
    },
    modules: {}
});
