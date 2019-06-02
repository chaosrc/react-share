<template>
    <button @click="$emit('click')" @touchStart="handleTouchStart"></button>
</template>

<script>
export default {
    methods: {
        handleTouchStart() {
            console.log('touch', this.porps)
        }
    }
}
</script>
