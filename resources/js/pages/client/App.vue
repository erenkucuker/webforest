<template>
  <div>
    <navigation-bar></navigation-bar>
    <mobile-ham></mobile-ham>
    <breadcrumb v-if="$route.name != 'Home'"></breadcrumb>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("getAllCategories");
    this.$store.commit("getAllBlogs");
    this.$store.commit("getRecentBlogs");
  },
  mounted() {},
  metaInfo: {
    title: "WebForest",

    titleTemplate: "%s | Welcome"
  }
};
</script>

<style></style>
