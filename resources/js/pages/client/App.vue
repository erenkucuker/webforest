<template>
  <div>
    <navigation-bar></navigation-bar>
    <mobile-ham></mobile-ham>
    <modal-subscribe></modal-subscribe>
    <breadcrumb v-if="$route.name != 'Home' && $route.name != 'Error' "></breadcrumb>
    <router-view></router-view>
    <footer-section v-if="$route.name != 'Error'"></footer-section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("getAllCategories");
    this.$store.commit("getAllBlogs");
    this.$store.commit("getRecentBlogs");
  },
  metaInfo: {
    title: "WebForest",

    titleTemplate: "%s | Welcome"
  }
};
</script>

<style></style>
