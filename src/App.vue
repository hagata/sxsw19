<template>
  <div id="app">
    <podcast-player/>
    <!-- Bookmarks -->
    <!-- Notes -->
  </div>
</template>

<script>
import PodcastPlayer from './components/PodcastPlayer.vue'

export default {
  name: 'podversation',
  components: {
    PodcastPlayer
  },
}
</script>

<style>
/* CSS Variables
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

usage: use the var() function anywhere in the Vue app
var(--dark-blue);
*/
:root {
  --dark-blue: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-blue);
  margin-top: 60px;
}
</style>
