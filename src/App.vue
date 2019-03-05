<template>
  <div id="app">
    <podcast-player ref="player" :bookmarks="bookmarks"/>
    <!-- Bookmarks -->
    <div class="bookmarks">
      <h2 class="bookmarks__header">Bookmarks</h2>
      <!-- For every Bookmark, add a bookmark component -->
      <bookmark
      v-for="item in bookmarks"
      :key="item.id"
      :metadata="item"
      v-on:jumped="bookmarkJumpHandler"
      />

    </div>
    <!-- Notes -->
  </div>
</template>

<script>
import PodcastPlayer from './components/PodcastPlayer.vue'
import VoiceInterface from './Utils/VoiceInterface.js'
import Bookmark from './components/Bookmark.vue'

export default {
  name: 'podversation',
  data() {
    return {
      bookmarks: [
        {
          id: 0,
          timestring: '06:22',
          seconds: 382.662643,
        }
      ],
    }
  },
  components: {
    PodcastPlayer,
    Bookmark,
  },
  mounted() {
    this.voice = new VoiceInterface() // artyom
    this.initCommands();
    this.$root.$on('jumped', this.bookmarkJumpHandler)
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
      // Get the time of the player
      const seconds = this.$refs.player.$refs.podcast.getCurrentTime().seconds
      const timestring = this.$refs.player.$refs.podcast.getCurrentTime().hhmmss
      // Make a new bookmark
      const bookmark = {
        id: `${this.bookmarks.length + 1}`,
        timestring,
        seconds
      }
      // add it to our "database"
      this.bookmarks.push(bookmark)
    },
    /**
     * When the bookmark is clicked, it emits a jumped event
     * seek the audio player to that
     */
    bookmarkJumpHandler(bookmark) {
      const seconds = bookmark.seconds;
      this.$refs.player.$refs.podcast.$refs.podcastAudio.currentTime = seconds
    },
    newNoteHandler(){
      console.log('New note')
    }
  }
}
</script>

<style lang='scss'>
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

.bookmarks {
  text-align: left;
}
</style>
