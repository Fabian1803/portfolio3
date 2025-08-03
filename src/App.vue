<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
</script>

<style>
* {
  margin: 0;
}

#app {
  height: 100vh;
}

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
