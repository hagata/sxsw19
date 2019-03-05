<template>
    <button class="bookmark" v-on:click="bookmarkClickHandler()">
        <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2z" fill="#000" fill-rule="evenodd"/></svg>
        <span class="bookmark__time">{{metadata.timestring}}</span>
    </button>
</template>

<script>
    export default {
        name: 'Bookmark',
        props: [
            'metadata'
        ],
        methods: {
            /**
             * When the button is clicked, emit a 'jump' event with the bookmarks data
             */
            bookmarkClickHandler() {
                this.$emit('jumped', {seconds: this.metadata.seconds})
            },
        }
    }
</script>

<style lang='scss' scoped>
    .bookmark{
        background: none;
        border: none;
        outline: none;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        &__time {
            margin-left: .75rem;
        }

        svg > *{
            fill: var(--dark-blue);
        }
    }
</style>