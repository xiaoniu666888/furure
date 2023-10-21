<template>
    <el-carousel :interval="2000" height="300px" width="300px" type="card" arrow="always" trigger="click">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
            <router-link :to="item.path">
                <img :src="item.imgUrl" alt="">
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup>
import { onMounted } from 'vue'
import { reactive } from 'vue'
const bannerList = reactive([
    {
        id: 1,
        imgUrl: 'https://api.likepoems.com/img/pc/',
        path: '/test'
    },
    {
        id: 2,
        imgUrl: 'https://api.likepoems.com/img/pixiv/',
        path: '/test2'
    },
    {
        id: 3,
        imgUrl: 'https://api.likepoems.com/img/bing/',
        path: '/test'
    },
    {
        id: 4,
        imgUrl: 'https://api.likepoems.com/img/pe/',
        path: '/test2'
    },
    {
        id: 5,
        imgUrl: 'https://api.likepoems.com/img/nature/',
        path: '/test'
    },
    {
        id: 6,
        imgUrl: 'https://api.likepoems.com/img/mc/',
        path: '/test2'
    }
])

onMounted(() => {
})
</script>
<style lang="scss">
.el-carousel__item {
    opacity: 0.9;
    line-height: 300px;
    margin: 0;
    text-align: center;
}
</style>
  