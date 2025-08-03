<template>
    <div class="container">
        <HomeHeader />
        <HomeMain />
        <HomeFooter />
    </div>
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

.container {
  display: grid;
  grid-template-rows: 60px auto 95px;
  height: 100%;
}

@media (max-width: 600px) {
  .container {
    grid-template-rows: 60px auto 140px;
  }
}
</style>