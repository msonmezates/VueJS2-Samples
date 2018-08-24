<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-2">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "./NewMessage";

export default {
  name: "Chat",
  props: {
    name: String
  },
  components: {
    NewMessage
  },
  data() {
    return {};
  }
};
</script>

<style>
.chat h2 {
  font-size: 3em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.5em;
}

.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
