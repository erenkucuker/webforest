import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "vue-router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        blogs: [],
        recentBlogs: []
    },

    mutations: {
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
