<template>
    <el-carousel :interval="2000" height="350px" type="card" arrow="always" trigger="click">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
            <router-link :to="item.path">
                <img :src="item.imgUrl" alt="">
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup>
import { onMounted } from 'vue'
import { bannerList } from '../assets/js/data'
import { reactive } from 'vue'
import { getMusicBanner } from '../api'

onMounted(() => {
    // getBanner()
})
// 获取轮播图
const getBanner = async () => {
    const res = await getMusicBanner()
    console.log(res);
}
</script>
<style lang="scss">
.el-carousel__item {
    line-height: 300px;
    margin: 0;
    text-align: center;
}
</style>
  