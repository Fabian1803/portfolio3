<template>
    <FabianHeader />
    <FabianMain />
    <FabianFooter />
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
</style>