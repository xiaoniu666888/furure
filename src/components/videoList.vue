<template>
    <div id="video">
        <div class="videoList">
            <div class="box" v-for="item in bannerList" :key="item.id">
                <div class="imgBox">
                    <img class="img" :src="item.cover" alt="">
                    <div class="mvNum">
                        <el-icon class="videoPlayIcon">
                            <VideoPlay />
                        </el-icon>
                        <span class="playCount">{{ formatCount(item.playCount) }}</span>
                        <span class="duration">{{ formatTime(item.mv.videos[0].duration / 1000) }}</span>
                    </div>
                    <div class="mvInfo">
                        <span class="name">{{ item.name }} - {{ item.artistName }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightImg">
            <img class="img" src="/todayNews.jpg" alt="">

            <!-- <img class="img" src="/girl.jpg" alt=""> -->
        </div>
    </div>
</template>

<script setup>
import { getTopMV } from '../api'
import { reactive, onMounted, ref } from 'vue'
import { formatCount, formatTime } from '../utils/format'
const bannerList = ref([])

onMounted(() => {
    getMVInfoList()
})

// 获取mv信息
const getMVInfoList = async () => {
    const { data } = await getTopMV()
    bannerList.value = data.data.slice(13, 21)
    console.log(data.data[9]);
}
</script>

<style lang="scss" scoped>
#video {
    padding: 0 10px;
    box-sizing: border-box;

    .videoList {
        float: left;
        width: 85%;
        padding-right: 20px;
        display: grid;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 55px;
        box-sizing: border-box;
        opacity: 1;
        z-index: 999;

        .box {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;

            .imgBox {
                width: 100%;
                height: 100%;

                .img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .mvNum {
                    position: relative;
                    top: -30px;
                    left: 0;
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    padding: 0 12px;
                    box-sizing: border-box;
                    cursor: pointer;

                    .videoPlayIcon {
                        margin-left: 0;
                        margin-right: 10px;
                    }

                    .playCount {
                        cursor: pointer;
                        flex: 1;
                    }

                    .duration {
                        cursor: pointer;
                    }
                }

                .mvInfo {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2px 10px 0 0;
                    box-sizing: border-box;

                    .name {
                        font-weight: 600;
                        // /* 让文本不换行 */
                        // white-space: nowrap;
                        // /* 超出部分隐藏 */
                        // overflow: hidden;
                        // /* 显示省略号 */
                        // text-overflow: ellipsis;

                    }
                }

            }
        }


    }

    .rightImg {
        width: 15%;
        float: right;
        z-index: 999;


        .img {
            width: 100%;
        }
    }

}
</style>