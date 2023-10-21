<template>
    <div id="videoList">

        <div class="box" v-for="item in bannerList" :key="item.id">
            <img class="img" :src="item.imgUrl" alt="">
        </div>




    </div>
</template>

<script setup>
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
    },
    {
        id: 7,
        imgUrl: 'https://api.likepoems.com/img/pc/',
        path: '/test'
    },
    {
        id: 8,
        imgUrl: 'https://api.likepoems.com/img/pixiv/',
        path: '/test2'
    },
    {
        id: 9,
        imgUrl: 'https://api.likepoems.com/img/bing/',
        path: '/test'
    },
    {
        id: 10,
        imgUrl: 'https://api.likepoems.com/img/pe/',
        path: '/test2'
    },
    {
        id: 11,
        imgUrl: 'https://api.likepoems.com/img/nature/',
        path: '/test'
    },
    {
        id: 12,
        imgUrl: 'https://api.likepoems.com/img/mc/',
        path: '/test2'
    },
    {
        id: 13,
        imgUrl: 'https://api.likepoems.com/img/pe/',
        path: '/test2'
    },
    {
        id: 14,
        imgUrl: 'https://api.likepoems.com/img/nature/',
        path: '/test'
    },
    {
        id: 15,
        imgUrl: 'https://api.likepoems.com/img/mc/',
        path: '/test2'
    }
])
</script>

<style lang="scss">
#videoList {
    min-width: 100%;
    min-height: 200px;
    display: grid;
    background: #fff;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px;
    box-sizing: border-box;
    opacity: .75;

    .box {
        // width: 100%;
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        .img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }


    }
}
</style>