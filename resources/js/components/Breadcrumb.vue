<template>
    <div class="breadcrumb">
        <img src="/img/logo-alone-min.png" alt="" />
        <h5 class="g-text">Home / {{ $route.name }}</h5>
        <h3>{{ $route.name }}</h3>
    </div>
</template>

<script>
export default {};
</script>

<style>
.breadcrumb {
    background: linear-gradient(
        300deg,
        rgba(34, 34, 34, 1) 0%,
        rgba(20, 20, 20, 1) 70%
    );
    color: white;
    display: grid;
    grid: 1fr 1fr 1fr /1fr 6fr;
    box-shadow: inset 0px 0px 5px 6px rgba(0, 0, 0, 0.75);
}

.breadcrumb h5 {
    grid-column: span 2;
    font-size: max(1.2vw, 14px);
    align-self: center;
}
.breadcrumb h3 {
    font-size: max(2vw, 35px);
    grid-column: span 2;
    align-self: center;
    text-transform: uppercase;
    text-shadow: 20px 12px 10px rgb(0, 0, 0);
}

.breadcrumb img {
    display: none;
    width: max(15vw, 40px);
}

/*MOBILE START */
@media (max-width: 767.98px) {
    .breadcrumb {
        display: grid;
        justify-items: center;
        align-items: center;
    }
    .breadcrumb img {
        display: grid;
        grid-column: span 2;
        justify-self: center;
        align-items: center;
    }
}
/*MOBILE END */
/*TABLET START */
/*TABLET END */
</style>
