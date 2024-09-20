<template>
    <div class="iconList">
        <!-- 每日推荐 -->
        <div class="iconList__item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>

        <!-- 私人FM -->
        <div class="iconList__item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenFM"></use>
            </svg>
            <span>私人FM</span>
        </div>

        <!-- 歌单 -->
        <div class="iconList__item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>

        <!-- 排行榜 -->
        <div class="iconList__item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.iconList {
    width: 100%;
    height: 2rem; /* 确保图标大小合适 */
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    align-items: center;
}

.iconList__item {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
    width: 1rem;
    height: 1rem;
}
</style>