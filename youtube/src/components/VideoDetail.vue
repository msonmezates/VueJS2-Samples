<template>
  <div v-if="video" class="col-md-8"> <!-- v-if validates if video isn't null -->
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="videoUrl" />
  </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object
  },
  computed: {
    videoUrl() {
      const id = this.video.id.videoId;
      return `https://www.youtube.com/embed/${id}`;
    }
  }
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>




