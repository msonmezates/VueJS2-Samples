<template>
  <div v-if="video"> <!-- v-if validates if video isn't null -->
    {{ video.snippet.title }}
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object
  }
};
</script>



