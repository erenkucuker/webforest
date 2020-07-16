<template>
  <section class="page-section schedule-form-section">
    <h3>{{ $t("schedule-form-title") }}</h3>
    <p>{{ $t("schedule-form-desc") }}</p>
    <hr class="section-underline g-item" />
    <schedule-form></schedule-form>
  </section>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | Schedule Form ",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.schedule-form-section {
  align-items: center;
  row-gap: 20px;
}

.schedule-form-section h3 {
  justify-self: center;
  font-size: max(2.3vw, 26px);
}
.schedule-form-section p {
  justify-self: center;
  font-size: max(1.2vw, 18px);
}
</style>
