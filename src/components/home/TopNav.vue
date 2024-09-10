<!--topnav是头部组件-->
<template>
    <div class="topNav">
        <div class="topleft"><!--最左侧的菜单图标-->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-list"></use>
            </svg>
        </div>
       
        <div class="topContent"><!--中间的文字-->
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topRight"><!--右侧的搜索图标-->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>
<style lang="less"scoped>
    .topNav{
        width: 100%;/*宽度继承*/
        padding: 10px;/*内边距*/
        display: flex;/*水平居中*/
        justify-content: space-between;/*等间距分布*/
        align-items: center;/*垂直居中*/
        .topContent{
            width: 65%;
            height: 100%;/*高度集成*/
            display: flex;
            justify-content:space-around;
            font-size: 18px; /*字体大小*/
        }
        .active{
            font-weight:900; /*加粗程度*/
        }
    }
    
</style>