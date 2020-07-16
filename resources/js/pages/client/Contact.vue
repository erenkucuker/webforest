<template>
  <section class="page-section contact-us-section">
    <div class="contact-title">
      <h3 class="g-text">{{ $t("contact-title") }}</h3>
      <hr class="section-underline g-item" />
    </div>
    <div class="contact-form">
      <h2 class="g-text contact-info-title">CONTACT FORM</h2>
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
      <h2 class="g-text contact-info-title">{{ $t("contact-info-title") }}</h2>
      <p>{{ $t("contact-info-desc") }}</p>
      <br />
      <h5 class="g-text">{{ $t("contact-info-address") }}:</h5>
      <p>Samplestreet 3 34117 Kassel Germany</p>
      <h5 class="g-text">Phone: +49 561 00 00 00 00</h5>
      <h5 class="g-text">Fax: +49 561 00 00 00 00</h5>
      <h5 class="g-text">{{ $t("contact-info-bus-hour") }}: 8am to 6:30pm</h5>
    </div>
    <iframe
      id="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.9193041325416!2d32.84008731582084!3d39.87604542943167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34590a0018d2d%3A0x50fb1c0bb1f1f43e!2zTmFjaSDDh2FrxLFyLCAwNjQ1MCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1sen!2str!4v1594221219754!5m2!1sen!2str"
      frameborder="0"
      style="border:0;"
      allowfullscreen
      aria-hidden="false"
      tabindex="0"
    ></iframe>
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
.contact-title {
  grid-column: span 2;
}
.contact-us-section {
  grid: auto auto / 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.contact-form {
  display: grid;
  grid-row: span 2;
  grid-column: 1/1;
  align-self: stretch;
  text-align: center;
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
  text-align: center;
  align-self: stretch;
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
#map {
  border: 2px solid #237a57 !important;
  grid-column: span 2;
  width: 100%;
  height: 100%;
}

.contact-info-title {
  text-transform: uppercase;
  font-size: max(1.2vw, 16px);
}
/* MOBILE START */
@media (max-width: 767.98px) {
  .contact-us-section {
    grid: 1fr 1fr 1fr / 1fr 1fr;
    height: initial;
  }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
