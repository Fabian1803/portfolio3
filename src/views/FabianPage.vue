<template>
  <div class="container">
    <FabianHeader />
    <FabianMain />
    <FabianFooter />
  </div>
</template>

<script>
import { FabianFooter, FabianMain, FabianHeader } from "../components/fabian/index";
export default {
  name: "FabianPage",
  components: {
    FabianHeader,
    FabianMain,
    FabianFooter
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-rows: 130px auto 95px;
  height: 100%;
}

@media (max-width: 600px) {
  .container {
    grid-template-rows: 60px auto 140px;
  }
}
</style>