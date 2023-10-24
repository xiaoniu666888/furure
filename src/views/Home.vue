<template>
    <div id="home">
        <!-- 顶部导航栏 -->
        <div class="nav font">
            <img class="logo" src="/logo.jpg" style="width: 50px; border-radius: 10px;" alt="琴筝和鸣" title="琴筝和鸣">

            <div class="navTitle">
                <router-link :to="{ path: '/' }">
                    民族音樂
                </router-link>
            </div>
            <div class="navText font">
                <span class="select active">发现音乐</span>
                <span class="select">我的音乐</span>
                <span class="select">商城</span>
                <span class="select">社区</span>
                <span class="select">直播</span>
                <span class="select">创作者中心</span>
                <span class="select icon">
                    <Search style="width: 1em; height: 1em; vertical-align: middle;" />
                    <span style="vertical-align: middle"> 搜索 </span>
                </span>
                <span class="select">
                    <img src="/avatar.jpg" style="width: 55px; margin-right: -100px; border-radius: 50%;" alt="">
                </span>
            </div>
        </div>


        <!-- 轮播图 -->
        <div class="content">
            <div class="navSecond font">
                <Nav />
            </div>
            <div class="banner">
                <Banner />
            </div>
            <div class="title">
                <Title title="创作推广" :middleList="oneMiddleList" :display="true" />
            </div>
            <div class="videoList">
                <VideoList />
            </div>
            <div class="titleTwo">
                <Title title="非遗传人守护计划" :middleList="twoMiddleList" :display="false" />
            </div>
            <div class="imageList">
                <ImageList />
            </div>
            <div class=" titleThree">
                <Title title="音乐列表" :middleList="threeMiddleList" :display="false" />
            </div>
            <div class="musicList">
                <musicList />
            </div>
        </div>
        <!-- 右下角图片 -->
        <div class="girlImg">
            <img class="girl" src="/girl.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
import Banner from '@/components/banner.vue'
import VideoList from '@/components/videoList.vue'
import Title from '@/components/title.vue'
import Nav from '@/components/nav.vue'
import ImageList from '@/components/imageList.vue'
import musicList from '@/components/musicList.vue'
import { oneMiddleList, twoMiddleList, threeMiddleList } from '../assets/js/data'
</script>

<style lang="scss" scoped>
#home {
    position: absolute;
    /* 固定定位，确保背景图层叠在其他内容之上 */
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #EDEEDB;
    animation: slideDown .8s ease-in-out;
    z-index: -5; // 将背景图置于最底层
    user-select: none;

    @keyframes slideDown {
        from {
            top: -30%;
            /* 初始位置在页面上方 */
        }

        to {
            top: 0;
            /* 最终位置在页面顶部 */
        }
    }

    // 顶部导航栏
    .nav {
        height: 75px;
        padding: 0 55px;
        color: #eee;
        box-sizing: border-box;
        background-color: #4E4639;
        opacity: .8;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .logo {
            margin-left: -20px;
        }

        .navTitle {
            font-size: 30px;
            cursor: pointer;
            margin-left: -80px;

        }

        .navText {
            display: flex;
            align-items: center;
            justify-content: space-around;

            .select {
                margin-left: 70px;
                cursor: pointer;
                transition: all .6s;

            }


            .select:hover {
                color: rgb(235, 145, 135);
                outline-width: 1px;
            }

            .select:active {
                transform: translate(10px, 10px);
            }

            .active {
                padding: 20px;
                background-color: #100805;
                box-sizing: border-box;
            }
        }
    }

    // 轮播图
    .content {
        width: 100%;
        margin: 0 auto;
        z-index: 10;

        .banner {
            width: 100%;
            margin: 0 auto;
            background-color: #7C745F;
            padding: 1% 1%;
            box-sizing: border-box;
        }

        // 第一个列表
        .title {
            width: 90%;
            margin: 0 auto;
            padding-top: 20px;
            box-sizing: border-box;
        }

        .videoList {
            width: 90%;
            margin: 0 auto;
            padding-top: 20px;
            box-sizing: border-box;
            opacity: 1;
        }

        // 第二个列表
        .titleTwo {
            width: 90%;
            margin: 0 auto;
            padding-top: 5%;
            box-sizing: border-box;
        }

        .imageList {
            width: 90%;
            margin: 0 auto;
            padding-top: 20px;
            box-sizing: border-box;
            opacity: 1;
        }

        // 第三个列表
        .titleThree {
            width: 90%;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .musicList {
            width: 90%;
            margin: 0 auto;
            padding-top: 20px;
            box-sizing: border-box;
            opacity: 1;
        }
    }

    // 左下角图片
    .girlImg {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 15rem;
        z-index: -10;
        display: none;

        .girl {
            width: 100%;
        }
    }





}
</style>