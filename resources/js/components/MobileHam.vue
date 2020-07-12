<template>
    <div>
        <div
            @click="MobileHam()"
            class="button-container"
            v-bind:class="{ active: isActive }"
        >
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>

        <div class="overlay" v-bind:class="{ open: isActive }" id="overlay">
            <nav class="overlay-menu">
                <ul>
                    <lang-swap></lang-swap>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Home' }"
                            @click.native="MobileHam()"
                        >
                            {{ $t("Home") }}
                        </router-link>
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'About' }"
                            @click.native="MobileHam()"
                            >{{ $t("About us") }}</router-link
                        >
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Services' }"
                            @click.native="MobileHam()"
                            >{{ $t("Services") }}</router-link
                        >
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Schedule' }"
                            @click.native="MobileHam()"
                            >{{ $t("Schedule") }}</router-link
                        >
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Contact' }"
                            @click.native="MobileHam()"
                            >{{ $t("Contact us") }}</router-link
                        >
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Portfolio' }"
                            @click.native="MobileHam()"
                            >{{ $t("Portfolio") }}</router-link
                        >
                    </li>
                    <li class="hvr-grow">
                        <router-link
                            :to="{ name: 'Blog' }"
                            @click.native="MobileHam()"
                            >{{ $t("Blog") }}</router-link
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        MobileHam: function() {
            this.isActive = !this.isActive;
            if (this.isActive == true) {
                document.body.classList.add("modal-open");
            } else {
                document.body.classList.remove("modal-open");
            }
        }
    }
};
</script>

<style scoped>
.button-container {
    visibility: hidden;
    position: fixed;
    top: 3%;
    right: 3%;
    height: 50px;
    width: 40px;
    cursor: pointer;
    z-index: 100;
    transition: opacity 0.25s ease;
}

.button-container:hover {
    opacity: 0.7;
}

.button-container.active .top {
    transform: translateY(10px) translateX(0) rotate(45deg);
    background: #237a57;
}

.button-container.active .middle {
    opacity: 0;
    background: #237a57;
}
.button-container.active .bottom {
    transform: translateY(-10px) translateX(0) rotate(-45deg);
    background: #237a57;
}

.button-container span {
    background: green;
    border: none;
    height: 4px;
    width: 80%;
    position: absolute;
    transition: all 0.35s ease;
    cursor: pointer;
    top: 0px;
    left: 5px;
}

span:nth-of-type(2) {
    top: 10px;
}

span:nth-of-type(3) {
    top: 20px;
}

.overlay {
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    visibility: hidden;
    transition: opacity 0.35s, visibility 0.35s, height 0.35s;
    overflow: hidden;
}

.overlay.open {
    opacity: 1;
    visibility: visible;
    height: 100%;
    z-index: 15;
}

.overlay.open .overlay-menu {
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 1;
    z-index: 10;
}
.overlay.open .overlay-menu ul {
    height: 100vh;
    display: grid;
    grid: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr /1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.overlay.open .overlay-menu ul li {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
}

.overlay.open .overlay-menu ul li a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #237a57;
    font-weight: 600;
    letter-spacing: 5px;
}

/* MOBILE START*/
@media (max-width: 767.98px) {
    .button-container {
        visibility: visible;
    }
}
/* MOBILE END*/
/* TABLET START*/
/* TABLET END*/
</style>
