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
    font-size: 20px;
    font-weight: 700;
    color: #000;
}

.header .more {
    display: flex;
    font-size: 18px;
    align-items: center;
    color: #100f0f;
    padding-left: 300px;
    cursor: pointer;
}

.header .more .text {
    font-size: 16px;
}
</style>