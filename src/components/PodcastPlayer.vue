<!-- Current podcast component -->
<template>
  <div class="podcast-player">
    <!-- outputs the podcast data to the page -->
    <pre>{{currentPodcast}}</pre>
    <!-- Build out the player UI -->
    <!-- Podcast cover art -->

    <!-- Podcast Title & Episode name -->
    <!-- Controls Component
      make a new component in components/Controls.vue
      it will take in the currentEpisode.audioSource as a prop
    -->
    <!-- Podcast Description -->
  </div>
</template>

<script>
import podcasts from '../data/podcast-data.js';
export default {
  name: 'PodcastPlayer',
  data() {
    return {
      currentPodcast: podcasts[0]
    };
  }
};
</script>

<style lang='scss' scoped>

</style>
