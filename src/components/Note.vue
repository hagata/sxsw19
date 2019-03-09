<template>
    <div class="note" @click="noteSeekHandler()">
        <p class="note__content">{{metadata.note}}</p>
        <span class="note__timestamp">{{metadata.timestring}}</span>
    </div>
</template>

<script>
    export default {
        name: 'note',
        props: [
            'metadata'
        ],
        methods: {
            noteSeekHandler() {
                this.$root.$emit('jumped', {seconds: this.metadata.seconds})
            }
        }
    }
</script>

<style lang='scss' scoped>
    .note {
        max-width: 30rem;
        border-left: 2px solid var(--dark-blue);
        padding: .24rem 2rem;
        margin-block-end: 2rem;

        &:hover {
            cursor: pointer;
        }

        &__timestamp {
            font-weight: 600;
            color: #616161;
            font-size: .75rem;
        }

        &__content {
            color: #444;
            margin-bottom: .25rem;
        }
    }
</style>