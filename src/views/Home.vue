<template>
    <div id="home">
        <!-- 顶部导航栏 -->
        <div class="nav">
            <div class="navTitle">
                <router-link :to="{ path: '/test' }">琴筝和鸣——非遗轧琴传承的践行者</router-link>
            </div>
            <div class="navText">
                <span class="select icon">
                    <Search style="width: 1em; height: 1em; vertical-align: middle;" />
                    <span style="vertical-align: middle"> 搜索 </span>
                </span>
                <span class="select">联系我们</span>
                <span class="select">资讯</span>
                <span class="select">test</span>
                <span class="date">{{ ymd }}</span>
                <span class="select">登录</span>
            </div>
        </div>


        <!-- 轮播图 -->
        <div class="content">
            <Banner />
            <!-- <Nav /> -->
            <div class="title">
                <Title title="推荐MV" />
            </div>
            <div class="videoList">
                <VideoList />
            </div>
        </div>


        <!-- 右下角图片 -->
        <div class="girlImg">
            <img class="girl" src="/girl.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
import Banner from '../components/banner.vue'
import VideoList from '../components/videoList.vue'
import Title from '../components/title.vue'
const ymd = new Date().toLocaleString().slice(0, 10).replace(/\//g, '-');
</script>

<style lang="scss">
#home {
    position: absolute;
    /* 固定定位，确保背景图层叠在其他内容之上 */
    top: 0;
    width: 100%;
    height: 100vh;
    // min-width: 50%;
    background: url("../../src/assets/imgs/bgImg.jpg") no-repeat center/cover;
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
        height: 80px;
        padding: 0 70px;
        // color: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        background-color: #d5f6df;
        opacity: .8;
        z-index: 10;

        .navTitle {
            font-size: 30px;
            font-family: '黑体';
            cursor: pointer;
        }

        .navText {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .select {
                margin-left: 50px;
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

            .date {
                margin-left: 50px;
                cursor: default;
            }

            .date:hover {
                // 日期不能有cover效果
                color: initial;
            }



        }
    }

    // 轮播图
    .content {
        width: 80%;
        margin: 0 auto;
        opacity: .8;
        z-index: 10;

        .title {
            padding-top: 20px;
            box-sizing: border-box;
        }

        .videoList {
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

        .girl {
            width: 100%;
        }
    }



}
</style>