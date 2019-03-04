<template>
    <div class="controls">
        <audio
        ref="podcastAudio"
        preload="auto"
        v-on:loadedmetadata="audioMetadataHandler()"
        v-on:timeupdate="currentTimeHandler"
        :src="audio"></audio>

        <div class="controls__time">
            <span class="controls__timestamp">{{currentTime}}</span>
            <div class="controls__timebar">
                <div
                v-on:click="seekHandler($event)"
                ref="seekbar"
                class="controls__seekbar">
                    <span ref="seekbarFill" class="controls__seekbar-fill"></span>
                </div>
            </div>
            <span class="controls__timestamp">{{duration}}</span>
        </div>

        <button
        ref="playToggleButton"
        class="controls__toggle-button"
        @click="playHandler($event)"
        >
        <!-- toggle button state from play/pause -->
        <span v-if="playing">PAUSE</span>
        <span v-if="!playing">PLAY</span>
        </button>
    </div>

</template>

<script>
    export default {
        name: 'Controls',
        data() {
            return {
                currentTime: '0:00',
                duration: '',
                playing: false,
            }
        },
        props: [
            'audio'
        ],
        methods: {
            /**
             * When The play/pause button is pushed, play or pause the audio
             */
            playHandler() {
                if (this.$refs.podcastAudio.paused) {
                    this.$refs.podcastAudio.play();
                    this.currentTimeHandler();
                } else {
                    this.$refs.podcastAudio.pause();
                }
                this.playing = !this.playing
            },
            /**
             * When the podcast is playing, we should be constantly updating
             * the current time
             */
            currentTimeHandler() {
                // console.log('Current Time', this.$refs.podcastAudio.currentTime)
                this.currentTime =
                    this.secondsToHHMMSS(this.$refs.podcastAudio.currentTime)

                // When the audio player time changes, update the seekbar fill
                this.seekbarFillHandler();
            },
            /**
             * Meta data handler
             * Get's audio files duration when it's available and sets
             * the duration prop
             */
            audioMetadataHandler() {
                const seconds = this.$refs.podcastAudio.duration;
                this.duration = this.secondsToHHMMSS(seconds);
            },
            /**
             * Timebar handler
             * takes the current time, set's a fill indicator on the seekbar
             */
            seekbarFillHandler() {
                // get the percentage of the audio player from current time
                const percentage =
                    this.$refs.podcastAudio.currentTime /
                    this.$refs.podcastAudio.duration;

                this.$refs.seekbarFill.style.transform = `translateX(${-100 + percentage * 100}%)`
            },
            /**
             * When the seekbar is clicked, get the position of the click,
             * updates the audio position to the clicked position (percentage)
             * calls fill update
             */
            seekHandler(event) {
                const click = event.clientX;
                // get seekbar position and size
                const seekbarWidth = this.$refs.seekbar.getBoundingClientRect().width;
                const seekbarOffset = this.$refs.seekbar.getBoundingClientRect().left;
                const percentage = (click - seekbarOffset) / (seekbarWidth);

                const seekToTimeInSeconds = this.$refs.podcastAudio.duration * percentage;
                this.$refs.podcastAudio.currentTime = seekToTimeInSeconds;

                this.seekbarFillHandler();
            },
            /**
             * duration to time utillity
             * takes time in s., converts it to hh mm ss
             */
            secondsToHHMMSS(seconds) {
                let duration = new Date(null);
                duration.setSeconds(seconds);
                return duration.toISOString() // full date
                    .substr(11, 8) // just the time
                    .replace(/^0(?:0:0?)?/, ""); // removes 00's before :
            }
        }
    }
</script>

<style lang='scss' scoped>
    .controls {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        outline: 1px dashed tomato;
        width: 80%;

        &__time {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        &__timestamp {
            flex:0 0 44px;

            &:first-of-type {
                margin-right:1rem;
            }
            &:last-of-type {
                margin-left: 1rem;
            }
        }

        &__timebar {
            flex: 1 1 100%;
        }

        &__seekbar {
            background: #aaaaaa;
            border-radius: 5px;
            height: 16px;
            overflow: hidden;
            position: relative;
        }

        &__seekbar-fill {
            background: var(--dark-blue);
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            transform: translateX(-100%); //sets start position to 0
            width: 100%;
        }



        &__toggle-button {
            background: var(--dark-blue);
            border: none;
            border-radius: 50%;
            color: white;
            display: block;
            height: 44px;
            width: 44px;
        }

    }
</style>