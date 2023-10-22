<template>
    <div id="imageList">
        <div class="imgList">
            <div class="leftList">
                <div class="up">
                </div>
                <div class="middle">
                    <div class="one margin">1</div>
                    <div class="two margin">2</div>
                    <div class="two margin">3</div>
                </div>
                <div class="below">
                </div>
            </div>
            <div class="rightList">
                <div class="fans">

                </div>
                <div class="text">

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
    height: 430px;
    padding: 0 10px;
    box-sizing: border-box;


    .leftList {
        width: 550px;
        height: 100%;
        float: left;

        .up {
            height: 130px;
            background-color: aliceblue;
            margin-top: 10px;

        }

        .middle {
            height: 130px;
            background-color: rgb(76, 148, 212);
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            .margin {
                margin-left: 30px;
            }
        }

        .below {
            height: 130px;
            background-color: rgb(76, 212, 117);
            margin-top: 10px;
            margin-bottom: 10px;

        }
    }

    .rightList {
        width: 780px;

        float: right;

        .fans {
            width: 100%;
            height: 260px;
            margin-top: 10PX;
            background-color: rgb(85, 255, 0);
        }

        .text {
            margin-top: 20px;
            width: 100%;
            height: 120px;
            background-color: aqua;
        }
    }
}
</style>