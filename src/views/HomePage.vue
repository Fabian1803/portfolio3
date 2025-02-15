<template>
    <HomeHeader />
    <HomeMain />
    <HomeFooter />
</template>

<script>
import { HomeHeader, HomeMain, HomeFooter } from "../components/home/index";
export default {
    name: "HomePage",
    components: {
        HomeHeader,
        HomeMain,
        HomeFooter
    }
}
</script>

<style>
</style>