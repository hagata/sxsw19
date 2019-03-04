<!-- Current podcast component -->
<template>
  <div class="podcast-player">
    <!-- outputs the podcast data to the page -->
    <!-- <pre>{{currentPodcast}}</pre> -->
    <!-- Build out the player UI -->
    <!-- Podcast cover art -->
    <img :src="currentPodcast.artwork" :alt="`artwork for ${currentPodcast.podcast}`">

    <!-- Podcast Title & Episode name -->
    <h1 class="podcast-player__episode">
      {{currentPodcast.episodeTitle}}
    </h1>
    <span class="podcast-player__title">
      {{currentPodcast.podcast}}
    </span>
    <!-- Controls Component -->
    <controls
      ref="podcast"
      :audio="currentPodcast.audioSource"
    />

    <p class="podcast-player__description">
      {{currentPodcast.description}}
    </p>
  </div>
</template>

<script>
import podcasts from '../data/podcast-data.js';
import Controls from './Controls.vue';

export default {
  name: 'PodcastPlayer',
  data() {
    return {
      currentPodcast: podcasts[0],
    };
  },
  components: {
    Controls
  }
};
</script>

<style lang='scss' scoped>
.podcast-player {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__episode {
    font-size: 1.6rem;
    line-height: 1.15;
    margin-bottom: .5rem;
  }

  &__title {
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
    color: var(--color-gray);
  }
}

</style>
