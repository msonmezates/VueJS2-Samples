<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";

export default {
  name: "app",
  components: {
    Welcome
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
