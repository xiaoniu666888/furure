<template>
    <div id="aeraHeader">
        <div class="header">
            <!-- 左边 -->
            <div class="leftTitle">
                <img src="/logo.jpg" style="width: 50px; padding-right: 15px; vertical-align:  -15px;  border-radius: 10px"
                    alt="">
                <span class="rightText">{{ props.title }} </span>
            </div>
            <!-- 中间 -->
            <div class="middleList font">
                <div v-for="item in middleList" :key="item">
                    <span class="middleSelect cursor">{{ item }}</span>
                    <span class="middleSelect">|</span>
                </div>


            </div>
            <!-- 右边 -->
            <div class="more">
                <span class="text" v-if="display">更多</span>
                <el-icon style="margin-left: 3px;" v-if="display">
                    <DArrowRight />
                </el-icon>
            </div>
        </div>
        <hr class="hrLine">
    </div>
</template>

<script setup>
const props = defineProps(['title', 'middleList', 'display'])
</script>

<style lang="scss" scoped>
#aeraHeader {
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .leftTitle {

            .rightText {
                font-weight: 700;
                font-size: 28px;
            }
        }

        .middleList {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .middleSelect {
                margin-left: 25px;
                font-size: 23px;
                box-sizing: border-box;
            }
        }



        .more {
            color: #000;
            display: flex;
            align-items: center;
            cursor: pointer;

            .text {
                font-size: 17px;
            }
        }


    }

    .hrLine {
        background-color: #AE2835;
        height: 5px;
        margin-top: 10px;
        margin-bottom: -5px;
    }
}
</style>