<template>
    <div>
        <!-- Audio Player -->
        <!-- Time controls -->
            <!-- Timestamps, current time and total time -->
            <!-- seekbar & seekbar fill element -->
        <!-- Play button -->
    </div>
</template>

<script>
    export default {
        name: 'Controls',
        data() {
            return {
                currentTime: '0:00',
                duration: ''
            }
        },
        props: [
            'audio'
        ],
        methods:{}

    }
</script>

<style lang='scss' scoped>

</style>