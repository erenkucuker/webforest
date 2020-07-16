<template>
  <div v-if="this.$store.state.showModalNewsletter" class="background-filter">
    <div class="modal-newsletter">
      <div class="left-section-newsletter">
        <h3 class="g-text">SIGN UP FOR OUR NEWSLETTER</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at quis nemo odio fugiat quam quisquam, cupiditate alias vero. Iure ad sit odio? Nam facilis, sit esse in commodi labore.</p>
        <div class="subscribe-container">
          <h3 class="g-text">SUBSCRIBE</h3>
          <span>
            Don’t miss to subscribe to our new feeds, kindly fill
            the form below.
          </span>
          <div class="subscribe-form">
            <input v-model.trim="$v.formEmail.$model" type="text" placeholder="Email Address" />

            <a @click="postSubscribe" class="btn-primary btn-subscribe">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </a>
          </div>
          <div class="contact-slot" :class="[errortype]">{{ errormessage }}</div>
        </div>
      </div>
      <div class="right-section-newsletter">
        <i @click="toggle" class="fa fa-times fa-2x pointer" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { email } from "vuelidate/lib/validators";
export default {
  validations: {
    formEmail: {
      email
    }
  },
  methods: {
    toggle() {
      this.$store.commit("toggleNewsletter");
    },
    postSubscribe() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.errormessage = "Please enter a valid email address.";
        this.errortype = "error";
      } else {
        axios
          .post("/api/subscribe", {
            email: this.formEmail
          })
          .then(
            response => (
              (this.errormessage = response.data.message),
              (this.errortype = response.data.classtype)
            )
          );
      }
    },
    sendMailReply() {
      axios.get("/api/sendmail/" + this.formEmail);
    }
  },
  data() {
    return {
      formEmail: "",
      errormessage: "",
      errortype: ""
    };
  }
};
</script>

<style>
.background-filter {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}
.modal-newsletter {
  position: fixed;
  display: grid;
  grid: auto / 1fr 1fr;
  background-color: white;
  width: 50%;
  height: 50%;
  left: 25%;
  top: 25%;
  border-radius: 5px;
}

.subscribe-form {
  display: grid;
  grid-auto-flow: column;
}
.subscribe-container {
  padding: 15px;
}

.left-section-newsletter {
  display: grid;
  padding: 20px;
}

.right-section-newsletter {
  display: grid;
  background: url(/img/tree.jpg) no-repeat;
  background-position: center;
  background-size: cover;
}

.right-section-newsletter i {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>