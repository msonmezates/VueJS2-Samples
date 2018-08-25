<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  data() {
    return {};
  },
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash); //this gives the access token sull string
  }
};
</script>
