<template>
    <div id="nav">
        <div class="navList">
            <span class="select active">推荐</span>
            <span class="select">排行版</span>
            <span class="select">关注</span>
            <span class="select">音乐人</span>
            <span class="select">小视频</span>
        </div>
        <el-icon>
            <Operation style="vertical-align: middle;" />
        </el-icon>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#nav {
    background-color: #B6262F;
    color: rgb(242, 243, 247);
    box-sizing: border-box;
    opacity: .9;
    z-index: 10;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .navList {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 30%;
        box-sizing: border-box;


        .select {

            margin-left: 60px;
            cursor: pointer;
            transition: all .6s;

        }

        .select:hover {
            color: #EDEEDB;
            outline-width: 1px;
        }

        .active {
            padding: 10px;
            background-color: #701B22;
            box-sizing: border-box;
        }


    }

}

.el-icon {
    margin-right: 25px;
}
</style>