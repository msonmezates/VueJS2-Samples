<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="/">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn">
        show buttons
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["login"])
  }
};
</script>
