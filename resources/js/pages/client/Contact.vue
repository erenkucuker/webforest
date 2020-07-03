<template>
  <section class="page-section contact-us-section">
    <div class="contact-title">
      <h3 class="g-text">{{ $t("contact-title") }}</h3>
      <hr class="section-underline g-item" />
    </div>
    <div class="contact-form">
      <p>{{ $t("contact-form-desc") }}</p>
      <form @submit.prevent="postContactForm()">
        <input type="text" placeholder="NAME" v-model="contactname" />
        <input type="text" placeholder="EMAIL" v-model="contactemail" />
        <textarea v-model="contactcontent" name id cols="20" rows="5" placeholder="MESSAGE"></textarea>
        <button type="submit" class="btn-lg btn-primary">
          {{ $t("contact-info-button") }}
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </button>
        <input type="hidden" name="_token" :value="csrf" />
      </form>
      <div class="contact-slot" :class="[errortype]">{{errormessage}}</div>
    </div>
    <div class="contact-information">
      <h2>{{ $t("contact-info-title") }}</h2>
      <p>{{ $t("contact-info-desc") }}</p>
      <br />
      <h5>{{ $t("contact-info-address") }}:</h5>
      <p>Samplestreet 3 34117 Kassel Germany</p>
      <h5>Phone: +49 561 00 00 00 00</h5>
      <h5>Fax: +49 561 00 00 00 00</h5>
      <h5>{{ $t("contact-info-bus-hour") }}: 8am to 6:30pm</h5>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      errormessage: "",
      errortype: "",
      contactname: "",
      contactemail: "",
      contactcontent: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    postContactForm() {
      axios
        .post("./api/contact-us", {
          contactname: this.contactname,
          contactemail: this.contactemail,
          contactcontent: this.contactcontent
        })
        .then(
          response => (
            (this.errormessage = response.data.message),
            (this.errortype = response.data.classtype)
          )
        );
    }
  },
  metaInfo: {
    titleTemplate: "%s | Contact Us ",
    meta: [
      { name: "description", content: "Page Description" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>

<style>
.contact-us-section {
  display: grid;
  grid: auto auto / auto auto;
  background-color: white;
  justify-items: center;
  align-items: center;
  height: 100vh;
}

.contact-form {
  grid-row: 2/2;
  grid-column: 1/1;
}

.contact-form form {
  display: grid;
  row-gap: 15px;
}

.contact-form form input {
  height: 35px;
  border: none;
  border-bottom: 2px solid grey;
}
.contact-form form input:focus {
  border: none;
  border-bottom: 2px solid green;
  color: green;
  font-size: max(1.2vw, 18px);
}
.contact-form form textarea {
  border: none;
  border-bottom: 2px solid grey;
}
.contact-form form textarea:focus {
  border: none;
  border-bottom: 2px solid green;
  color: green;
  font-size: max(1.2vw, 18px);
}

.contact-form form button {
  width: 120px;
  height: 50px;
}
.contact-us-section h3 {
  font-size: max(2.5vw, 35px);
}

.contact-form textarea {
  resize: none;
  border: none;
}
.contact-information {
  grid-row: span 2;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-size: max(1.2vw, 16px);
}
.error {
  text-align: center;
  background-color: red;
  color: white;
}
.success {
  text-align: center;
  background-color: #237a57;
  color: white;
}
/* MOBILE START */
@media (max-width: 767.98px) {
  .contact-us-section {
    grid: 1fr 1fr 1fr / 1fr;
    height: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
