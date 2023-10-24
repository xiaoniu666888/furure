<template>
    <div id="imageList">
        <div class="imgList">
            <div class="leftList">
                <div class="up">
                    <img class="img" src="/imgList/up.jpg" alt="">
                </div>
                <div class="middle">
                    <div class="margin">
                        <img class="one" src="/imgList/fan1.jpg" alt="">
                    </div>
                    <div class="margin">
                        <img class="two" src="/imgList/fan2.jpg" alt="">
                    </div>
                    <div class="margin">
                        <img class="three" src="/imgList/fan3.jpg" alt="">
                    </div>
                </div>
                <div class="below">
                    <img src="/banner/banner2.jpg" style="height: 100%;" alt="">
                </div>
            </div>
            <div class="rightList">
                <div class="fans">
                    <img class="img" src="/imgList/dramaOne.jpg" alt="">
                </div>
                <div class="textTitle">
                    <div style="width: 100%; height: 100%;">
                        <img class="img" src="/imgList/BGI.jpg" style="opacity: .6; position: relative; z-index: 0;" alt="">
                    </div>
                    <div class="textBox">
                        <span class="text">传承民族音乐</span>
                        <span class="text">助推乡村振兴</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#imageList {
    width: 1370px;
    height: 600px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #eee;


    .leftList {
        width: 570px;
        height: 100%;
        float: left;

        .up {
            height: 200px;
            background-color: #fff;
            margin-top: 10px;
            padding: 10px 10px;
            box-sizing: border-box;
        }

        .middle {
            height: 150px;
            background-color: aliceblue;
            margin-top: 10px;
            padding: 10px 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-sizing: border-box;

            .margin {
                margin: 0 10px;
            }

            .one {
                width: 100%;
            }

            .two {
                width: 100%;
            }

            .three {
                width: 100%;
            }
        }

        .below {
            width: 100%;
            height: 200px;
            background-color: aliceblue;
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: center;

        }
    }

    .rightList {
        width: 780px;
        float: right;

        .fans {
            width: 100%;
            height: 400px;
            margin-top: 10PX;
            background-color: aliceblue;
            padding: 20px;
            box-sizing: border-box;
        }

        .textTitle {
            position: relative;
            margin-top: 20px;
            width: 100%;
            height: 150px;
            padding: 10px;
            box-sizing: border-box;
            background-color: aliceblue;

            .textBox {
                opacity: 1;
                position: relative;
                top: -60%;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 150px;
                box-sizing: border-box;

                .text {
                    font-size: 35px;
                    color: #1344A0;
                    font-weight: 900;
                    text-shadow: 5px 5px 1px white;
                }
            }


        }
    }

    .img {
        width: 100%;
        height: 100%;
    }
}
</style>