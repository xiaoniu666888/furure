<template>
    <div id="video">
        <div class="videoList">
            <div class="box" v-for="item in musicList" :key="item.id">
                <div class="imgBox">
                    <img class="img" :src="item.coverImgUrl" alt="">
                    <div class="mvNum">
                        <el-icon class="musicIcon">
                            <Headset />
                        </el-icon>
                        <span class="playCount">{{ formatCount(item.playCount) }}</span>
                    </div>
                    <div class="mvInfo">
                        <span class="name">{{ item.name }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getSongMenuList } from '../api'
import { reactive, onMounted, ref } from 'vue'
import { formatCount, formatTime } from '../utils/format'
const musicList = ref([])

onMounted(() => {
    getSongList()
})

// 获取mv信息
const getSongList = async () => {
    const { data } = await getSongMenuList()
    musicList.value = data.playlists.slice(0, 12)
    console.log(data.playlists.slice(0, 12));
}
</script>

<style lang="scss" scoped>
#video {
    padding: 0 10px;
    box-sizing: border-box;

    .videoList {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 30px;
        box-sizing: border-box;
        opacity: 1;

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
                    padding: 0 6px;
                    box-sizing: border-box;
                    cursor: pointer;

                    .musicIcon {
                        cursor: pointer;
                        border-radius: 10px;
                        background-color: rgba(0, 0, 0, .5);
                        padding: 6px;
                    }

                    .playCount {
                        margin-left: auto;
                        cursor: pointer;
                        padding: 6px;
                        box-sizing: border-box;
                        border-radius: 10px;
                        background-color: rgba(0, 0, 0, .5);

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