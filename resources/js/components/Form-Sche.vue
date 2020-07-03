<template>
    <form @submit.prevent="postScheduleForm()">
        <div class="form-slot" :class="[errortype]">{{ errormessage }}</div>
        <div class="progress-bar">
            <div class="progress-fill" :class="['w-' + progressfill]">
                {{ progressbar }} {{ $t("schedule-form-completed") }}
            </div>
        </div>
        <div class="form-tab tab-1" v-if="step == 1">
            <fieldset>
                <legend class="g-text">
                    {{ $t("schedule-form-personal") }}
                </legend>
                <label for="name">{{ $t("schedule-form-name-surname") }}</label>
                <input
                    v-model.trim="$v.formFullName.$model"
                    type="text"
                    placeholder="Name and Surname"
                />
                <label for="email">{{ $t("schedule-form-email") }}</label>
                <input
                    placeholder="Email Address"
                    v-model.trim="$v.formEmail.$model"
                />
                <label for="platform">{{ $t("schedule-form-platform") }}</label>
                <v-select
                    :options="[
                        'Skype',
                        'Zoom',
                        'Google Duo',
                        'Telegram',
                        'Whatsapp'
                    ]"
                    v-model="formPlatformType"
                ></v-select>
                <label for="platformuserinfo">{{
                    $t("schedule-form-platform-user")
                }}</label>
                <input
                    placeholder="Number,Email or Your Id Example:myskypeid1"
                    v-model="formPlatformUser"
                />
                <label for="phone">{{ $t("schedule-form-phone") }}</label>
                <phone-num-input
                    color="green"
                    type="phone"
                    placeholder="Phone Number"
                    v-model.trim="$v.formPhone.$model"
                />
                <label for="industry">{{ $t("schedule-form-industry") }}</label>
                <input
                    type="text"
                    placeholder="Example:Service/Food"
                    v-model.trim="$v.formIndustry.$model"
                />
                <div class="form-error" v-if="$v.step1GroupValidate.$invalid">
                    There is an error looking in your form fields.Please
                    complete all fields.
                </div>
            </fieldset>
        </div>
        <div class="form-tab tab-2" v-if="step == 2">
            <fieldset>
                <legend class="g-text">
                    {{ $t("schedule-form-account") }}
                </legend>
                <label for="project-title">{{
                    $t("schedule-form-project-title")
                }}</label>
                <input
                    type="text"
                    placeholder="Project Title"
                    v-model.trim="$v.formProjectTitle.$model"
                />
                <label for="project-desc">{{
                    $t("schedule-form-project-desc")
                }}</label>
                <textarea
                    name
                    id
                    placeholder="Your Project Description and details. Maximum 400 Character"
                    v-model.trim="$v.formProjectDesc.$model"
                ></textarea>
                <div class="form-error" v-if="$v.step2GroupValidate.$invalid">
                    There is an error looking in your form fields.
                </div>
            </fieldset>
        </div>
        <div class="form-tab tab-3" v-if="step == 3">
            <fieldset>
                <legend class="g-text">
                    {{ $t("schedule-form-picture") }}
                </legend>
                <h4 class="g-text">
                    This field is optional if you want to continue click next
                    button.
                </h4>
                <h4>Drop files anywhere to upload or</h4>
                <a>
                    <file-upload
                        :drop="true"
                        :maximum="3"
                        :thread="3"
                        :size="1920 * 1080"
                        accept="image/png, image/gif, image/jpeg, image/"
                        class="btn-lg btn-primary"
                        ref="upload"
                        extensions="jpg,gif,png,webp"
                        v-model="files"
                        @input-filter="inputFilter"
                        >Select files</file-upload
                    >
                    <div>
                        Maximum resolution 1920x1080 and Maximum 3 file
                        accepted.
                    </div>
                </a>
                <ul>
                    <span>Selected Files:</span>
                    <span v-if="files.length == 0">Nothing</span>
                    <li
                        class="preview-item"
                        v-for="file in files"
                        :key="file.id"
                    >
                        <img
                            class="preview-img"
                            :src="file.blob"
                            width="150"
                            height="100"
                        />
                        <span>Filename:</span>
                        <span class="g-text">{{ file.name }}</span>
                        <span>Size:</span>
                        <span class="g-text">{{ file.size }} KB</span>
                    </li>
                </ul>
                <a class="btn-upload btn-primary">Upload Files</a>
            </fieldset>
        </div>
        <div class="form-tab tab-4" v-if="step == 4">
            <fieldset>
                <legend class="g-text">
                    {{ $t("schedule-form-calendar") }}
                </legend>
                <div class="date-picker">
                    <date-time-picker
                        v-model="formScheduleDate"
                        color="#237a57"
                        :inline="true"
                        :disabled-hours="['01', '02', '03', '04', '05']"
                        :minute-interval="10"
                        :min-date="this.$moment().format('YYYYMMDD')"
                        :max-date="
                            this.$moment()
                                .add(1, 'month')
                                .format('YYYYMMDD')
                        "
                        :disabled-dates="disabled"
                        format="YYYY-MM-DD hh:mm"
                    />
                </div>
                <p class="g-text">
                    Please select available day and time according to
                    UTC(Coordinated Universal Time) timezone.
                </p>
            </fieldset>
        </div>

        <div class="steps-form">
            <div
                class="step-form-item step-item-1"
                :class="{ 'step-active': stepActive1 }"
            ></div>
            <div
                class="step-form-item step-item-2"
                :class="{ 'step-active': stepActive2 }"
            ></div>
            <div
                class="step-form-item step-item-3"
                :class="{ 'step-active': stepActive3 }"
            ></div>
            <div
                class="step-form-item step-item-4"
                :class="{ 'step-active': stepActive4 }"
            ></div>
        </div>
        <div
            v-if="step == 1 || step == 2 || step == 3 || step == 4"
            class="button-set"
        >
            <a
                @click="prev"
                class="btn-lg btn-primary pointer"
                v-bind:class="{ 'not-allowed': isAllowed, pointer: isPointer }"
                >{{ $t("schedule-form-button-1") }}</a
            >
            <a
                @click="next"
                class="btn-lg btn-primary pointer"
                v-bind:class="{ 'not-allowed': isAllowed2 }"
                >{{ $t("schedule-form-button-2") }}</a
            >
        </div>
        <button
            type="submit"
            v-if="step == 4"
            class="btn-lg btn-primary pointer"
        >
            Submit
        </button>
        <input type="hidden" name="_token" :value="csrf" />
    </form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
    created() {
        this.getScheduledDates();
    },
    mounted() {},
    computed: {},
    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            isAllowed: true,
            isAllowed2: false,
            isPointer: false,
            step: 1,
            progressbar: "%25",
            progressfill: 25,
            stepActive1: true,
            stepActive2: false,
            stepActive3: false,
            stepActive4: false,
            formFullName: "",
            formEmail: "",
            formIndustry: "",
            formPhone: "",
            formProjectTitle: "",
            formProjectDesc: "",
            files: [],
            formScheduleDate: "",
            formPlatformType: "Skype",
            formPlatformUser: "",
            schedules: [],
            disabled: [],
            errormessage: "",
            errortype: ""
        };
    },
    methods: {
        disabled_dates() {
            var vm = this;
            for (let i = 0; i < vm.schedules.length; i++) {
                var something = vm.disabled.push(
                    vm.formatTimes(vm.schedules[i].date_time)
                );
            }
        },
        formatTimes(val) {
            return this.$moment(val, "YYYY-MM-DD").format("YYYY-MM-DD");
        },
        postScheduleForm() {
            axios
                .post("./api/schedules", {
                    fullname: this.formFullName,
                    email: this.formEmail,
                    phonenumber: this.formPhone,
                    industry: this.formIndustry,
                    projecttitle: this.formProjectTitle,
                    projectdesc: this.formProjectDesc,
                    datetime: this.formScheduleDate,
                    formplatformtype: this.formPlatformType,
                    formplatformuser: this.formPlatformUser
                })
                .then(
                    response => (
                        (this.errormessage = response.data.message),
                        (this.errortype = response.data.classtype)
                    )
                );
        },
        postPhotosForm() {
            axios
                .post("./api/schedules/upload", {
                    images: this.files
                })
                .then(response => (this.errormessage = response.data));
        },
        getScheduledDates() {
            var vm = this;
            axios.get("./api/schedules").then(response => {
                this.schedules = response.data;
                vm.disabled_dates();
            });
        },
        prev() {
            if (this.step <= 1) {
                this.isAllowed = true;
            } else {
                this.isAllowed2 = false;
                this.isAllowed = false;
                this.step--;
            }
        },
        next() {
            if (this.step < 1) {
                this.isAllowed = true;
            } else {
                this.isAllowed = false;
            }
            if (this.step < 4) {
                this.$v.$touch();
                if (this.step == 1 && this.$v.step1GroupValidate.$invalid) {
                } else if (
                    this.step == 2 &&
                    this.$v.step2GroupValidate.$invalid
                ) {
                } else {
                    this.step++;
                }

                this.isAllowed2 = false;
            } else {
                this.isAllowed2 = true;
            }
        },
        inputFilter(newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    return prevent();
                }

                // Create the 'blob' field for thumbnail preview
                newFile.blob = "";
                let URL = window.URL || window.webkitURL;
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file);
                }
            }
        }
    },
    watch: {
        step: function(val) {
            if (val == 1) {
                this.progressbar = "25%";
                this.progressfill = 25;
                this.stepActive1 = true;
                this.stepActive2 = false;
                this.stepActive3 = false;
                this.stepActive4 = false;
            } else if (val == 2) {
                this.progressbar = "50%";
                this.progressfill = 50;
                this.stepActive1 = true;
                this.stepActive2 = true;
                this.stepActive3 = false;
                this.stepActive4 = false;
            } else if (val == 3) {
                this.progressbar = "75%";
                this.progressfill = 75;
                this.stepActive1 = true;
                this.stepActive2 = true;
                this.stepActive3 = true;
                this.stepActive4 = false;
            } else if (val == 4) {
                this.progressbar = "100%";
                this.progressfill = 100;
                this.stepActive1 = true;
                this.stepActive2 = true;
                this.stepActive3 = true;
                this.stepActive4 = true;
            }
        }
    },
    validations: {
        formFullName: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(40)
        },
        formEmail: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(40)
        },
        formIndustry: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(40)
        },
        formPhone: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(25)
        },
        formProjectTitle: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(40)
        },
        formProjectDesc: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(400)
        },
        step1GroupValidate: [
            "formFullName",
            "formEmail",
            "formIndustry",
            "formPhone"
        ],
        step2GroupValidate: ["formProjectTitle", "formProjectDesc"]
    }
};
</script>

<style>
.schedule-form-section form {
    display: grid;
    row-gap: 20px;
}

.schedule-form-section .form-tab fieldset {
    display: grid;
    height: 500px;
}
.form-tab label {
    font-size: max(1.2vw, 22px);
}
.form-tab fieldset {
    border: 4px solid var(--gradient-color2);
}
.form-tab fieldset legend {
    font-size: max(1.8vw, 30px);
    font-weight: 600;
}

.form-tab fieldset input::placeholder {
    font-size: max(1vw, 14px);
}
.form-tab fieldset input {
    border-style: none;
    border-bottom: 2px solid grey;
    height: 30px;
    width: 100%;
    font-size: max(1vw, 14px);
}

.form-tab fieldset input:focus {
    outline: none;
    border-bottom: 2px solid green;
    font-size: max(1.5vw, 18px);
    color: green;
}
.form-tab fieldset input:focus::placeholder {
    color: green;
}

.form-tab textarea {
    resize: none;
    border-style: none;
    border-bottom: 7px solid grey;
    width: 100%;
}

.form-tab textarea:focus {
    outline: none;
    border-bottom: 2px solid green;
    font-size: max(1.5vw, 18px);
    color: green;
}

.tab-3 {
    text-align: center;
    align-items: center;
}

.button-set {
    justify-self: center;
}

.button-set button {
    cursor: pointer;
    height: 50px;
    width: 80px;
}

.progress-bar {
    display: grid;
    align-content: center;
    width: 100%;
    height: 20px;
    border: 2px solid green;
}

.progress-fill {
    width: 25%;
    height: 18px;
    color: white;
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
    );
    background-size: 1rem 1rem;
    background-color: var(--gradient-color2);
    animation: animate-stripes 4s linear infinite;
    text-align: center;
}
.steps-form {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    text-align: center;
    justify-items: center;
    align-items: center;
}

.step-form-item {
    position: relative;
    background-color: grey;
    width: 50px;
    height: 50px;
}
.step-form-item:before {
    display: block;
    margin: 25% 25% auto;
    text-align: center;
    font-family: "Font Awesome 5 Free";
    color: white;
}

.step-item-1:before {
    content: "\f007";
}
.step-item-2:before {
    content: "\f013 ";
}
.step-item-3:before {
    content: "\f03e ";
}
.step-item-4:before {
    content: "\f073 ";
}

.step-form-item-activated {
    position: relative;
    background-color: grey;
    width: 50px;
    height: 50px;
}

.step-form-item-activated:before {
    display: block;
    margin: 25% 25% auto;
    text-align: center;
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    color: white;
    animation: rotate-center 0.6s ease-in-out both;
}

.step-active {
    background-color: var(--gradient-color2) !important;
}
.step-active:before {
    background-color: var(--gradient-color2) !important;
    background-color: white;
    border: none;
}

.step-active:after {
    background-color: var(--gradient-color2);
}

.theme-green .vdatetime-popup__header,
.theme-green .vdatetime-calendar__month__day--selected > span > span,
.theme-green .vdatetime-calendar__month__day--selected:hover > span > span {
    background: var(--gradient-color2);
}
.theme-green .vdatetime-year-picker__item--selected,
.theme-green .vdatetime-time-picker__item--selected,
.theme-green .vdatetime-popup__actions__button {
    color: var(--gradient-color2);
}

.preview-item {
    display: grid;
    grid: auto / auto auto auto auto auto;
    justify-items: center;
    align-items: center;
    border-top: 1px solid grey;
}
li.preview-item:last-of-type {
    border-bottom: 1px solid grey;
}

.form-error {
    color: crimson;
}
.btn-upload {
    justify-self: center;
    align-self: center;
}
</style>
