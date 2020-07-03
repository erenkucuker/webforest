<template>
  <section class="page-section schedule-section">
    <div class="schedule-card">
      <h3>
        {{ $t("schedule-title-1") }}
        <span class="g-text">{{ $t("schedule-title-2") }}</span>
      </h3>
      <img src="/img/video-call.jpg" alt />
      <p>{{ $t("schedule-desc") }}</p>
    </div>
    <div class="manage-process">
      <h2>{{ $t("schedule-manage-title") }}</h2>
      <div class="horizontal-timeline">
        <div class="timeline">
          <div class="events-wrapper">
            <div class="events">
              <ol>
                <li @click="processstep=1">
                  <a>
                    {{
                    $t("schedule-event-1")
                    }}
                  </a>
                </li>
                <li @click="processstep=2">
                  <a>
                    {{
                    $t("schedule-event-2")
                    }}
                  </a>
                </li>
                <li @click="processstep=3">
                  <a>
                    {{
                    $t("schedule-event-3")
                    }}
                  </a>
                </li>
                <li @click="processstep=4">
                  <a>
                    {{
                    $t("schedule-event-4")
                    }}
                  </a>
                </li>
                <li @click="processstep=5">
                  <a>
                    {{
                    $t("schedule-event-5")
                    }}
                  </a>
                </li>
                <li @click="processstep=6">
                  <a>
                    {{
                    $t("schedule-event-6")
                    }}
                  </a>
                </li>
                <li @click="processstep=7">
                  <a>
                    {{
                    $t("schedule-event-7")
                    }}
                  </a>
                </li>
                <li @click="processstep=8">
                  <a>
                    {{
                    $t("schedule-event-8")
                    }}
                  </a>
                </li>
                <li @click="processstep=9">
                  <a>
                    {{
                    $t("schedule-event-9")
                    }}
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div v-if="processstep == 1" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 2" class="events-content">
          <h3>Sec</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 3" class="events-content">
          <h3>third</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 4" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 5" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 6" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 7" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 8" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
        <div v-if="processstep == 9" class="events-content">
          <h3>{{ $t("schedule-event-title") }}</h3>
          <p>{{ $t("schedule-event-desc") }}</p>
        </div>
      </div>
      <router-link
        class="btn-lg btn-primary schedule-btn"
        :to="{ name: 'Schedule Form' }"
      >{{ $t("schedule-event-button") }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      processstep: 1
    };
  },
  metaInfo: {
    titleTemplate: "%s | Schedule ",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.schedule-section {
  display: grid;
  background-color: white;
  text-align: center;
}

.schedule-section p {
  font-size: max(1.1vw, 18px);
}

.schedule-card {
  display: grid;
  justify-items: center;
  align-items: center;
  grid: auto 2fr auto / 1fr 2fr 1fr;
  row-gap: 20px;
}

.schedule-card img {
  grid-row: 2/2;
  grid-column: 2/2;
  width: max(40vw, 30vw);
  border: 3px solid var(--gradient-color2);
  border-radius: 5px;
}

.schedule-card h3 {
  grid-column: 2/2;
  font-weight: 700;
  font-size: max(2.5vw, 30px);
}
.schedule-card p {
  grid-column: 2/2;
}

.schedule-card a {
  display: grid;
  grid-column: 2/2;
  height: 4vh;
  align-items: center;
}

.schedule-btn {
  width: 10%;
  height: 45px;
  display: grid;
  justify-items: center;
  align-items: center;
}

.manage-process {
  display: grid;
  grid: 1fr / 1fr;
  justify-items: center;
}

.manage-process h2 {
  font-size: max(2.3vw, 25px);
}
.manage-process h3 {
  font-size: max(1.5vw, 18px);
}

.horizontal-timeline {
  display: grid;
  grid: 1fr 1fr / 1fr 2fr 1fr;
}
.timeline {
  display: grid;
  align-items: center;
  grid-column: 2/2;
}

.events:after {
  content: "";
  display: grid;
  position: relative;
  bottom: 10px;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: grey;
}

.events ol {
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  column-gap: 20px;
}
.events ol li {
  cursor: pointer;
}

.events ol li a {
  color: var(--gradient-color2);
}

.events ol li a:after {
  content: "";
  display: grid;
  position: relative;
  top: 0;
  margin: auto;
  background-color: var(--gradient-color2);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--gradient-color2);
  z-index: 1;
}

.events-content {
  grid-column: 2/2;
}

/*MOBILE START */
@media (max-width: 767.98px) {
  .events ol {
    grid-auto-flow: row;
    justify-items: center;
  }
  .schedule-card img {
    width: max(95vw, 80vw) !important;
  }
  .schedule-btn {
    width: auto;
  }
  .events:after {
    display: none;
  }
}
/*MOBILE END */
/*TABLET START */
@media (max-width: 991.98px) {
  .schedule-card img {
    width: max(80vw, 60vw);
  }
}
/*TABLET END */
</style>
