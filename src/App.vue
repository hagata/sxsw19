<template>
  <div id="app">
    <podcast-player ref="player"/>
    <!-- Bookmarks -->
    <!-- Notes -->
  </div>
</template>

<script>
import PodcastPlayer from './components/PodcastPlayer.vue'
import VoiceInterface from './Utils/VoiceInterface.js'

export default {
  name: 'podversation',
  components: {
    PodcastPlayer
  },
  mounted() {
    this.voice = new VoiceInterface() // artyom
    this.initCommands();
  },
  methods: {
    /**
     * Registers all the voice commands we want to listen for
     */
    initCommands() {
      this.voice.listener.on(['play', 'start', 'stop', 'pause']).then(() => {
        this.playHandler();
      })
      this.voice.listener.on(['add a bookmark', 'save this spot', 'bookmark']).then(() => {
        this.newBookmarkHandler();
      })
      this.voice.listener.on(['voice note', 'new memo', 'note', 'memo']).then(() => {
        this.newNoteHandler();
      })
    },
    /**
     * Plays the podcast on the 'play' command
     */
    playHandler() {
      // Toggle's play/pause
      // BONUS: Refactor the toggle method to separate playing and pausing.
      this.$refs.player.$refs.podcast.playHandler();
    },
    /**
     * Adds a bookmark
     */
    newBookmarkHandler(){
      console.log('New Bookmark')
    },
    newNoteHandler(){
      console.log('New note')
    }
  }
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
  --color-red: #F34624;
  --color-light-gray: #e0e0e0;
  --color-gray: #757575;
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
