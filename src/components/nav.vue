<template>
    <div id="nav">
        <div class="navList">
            <span class="select active">推荐</span>
            <span class="select">排行版</span>
            <span class="select">歌单</span>
            <span class="select">主播电台</span>
            <span class="select">歌手</span>
            <span class="select">新碟上架</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
#nav {
    background-color: #98BFD6;
    height: 40px;
    padding-left: 300px;
    color: rgb(242, 243, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    opacity: .8;
    z-index: 10;

    .navList {
        display: flex;
        align-items: center;
        justify-content: space-around;

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

        .active {
            padding: 8px;
            border-radius: 20%;
            background-color: rgb(47, 175, 239);
            box-sizing: border-box;
        }


    }

}
</style>