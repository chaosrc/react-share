<template>
    <div>
        <ul class="rc-list">
            <li v-for="item in list" :key="item.key">{{item.value}}</li>
        </ul>
        <button v-if="hasButton">添加</button>
    </div>
</template>
<script>
export default {
    porps: {
        list: {
            type: Array,
            default: () => []
        },
        hasButton: {
            type: Boolean,
            default: false
        }

    }
}
</script>
