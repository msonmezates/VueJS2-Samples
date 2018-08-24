<template>
  <div class="chat container">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: {
    name: String
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
