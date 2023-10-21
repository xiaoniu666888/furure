<template>
    <div class="header">
        <div class="rightText">{{ props.title }}</div>
        <div class="more">
            <span class="text">更多</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style lang="scss">
.header {
    // min-width: 50%;
    display: flex;
    align-items: center;
    /* 在两端 */
    justify-content: space-between;
}

.header .rightText {
    font-size: 18px;
    font-weight: 700;
    color: #000;
}

.header .more {
    display: flex;
    font-size: 16px;
    align-items: center;
    color: #4e4b4b;
    padding-left: 300px;
}

.header .more .text {
    font-size: 16px;
}
</style>