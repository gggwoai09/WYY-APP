<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swpie" :show-indicators="false">
                <van-swipe-item v-for="item in musicList" :key="item">
                    <img :src="item.picUrl" alt="">
                    <span class="playCount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="icon-bofang"></use>
                        </svg>
                        {{ item.playCount }}
                    </span>
                    <span class="name">{{ item.name }}</span>
                </van-swipe-item>
              </van-swipe>              
        </div>
    </div>    
</template>
<script>
import { getMusicList } from '@/request/api/home.js';
export default {
    data() {
        return {
            musicList: [],
        };
    },
    methods:{
        async getGnedan(){
            let res = await getMusicList();
            console.log(res);
            this.musicList = res.data.result;
        },
    },
    mounted() {
        this.getGnedan()

    },
}
</script>

<style lang="less" scoped>
.musicList {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
    .musicTop {
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title {
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more {
            border: 1px solid #ccc;
            text-align: center;
            line-height: 0.6rem;
            padding: 0 0.2rem;
            border-radius: 0.4rem;
        }
    }
}
.musicContent{
    width: 100%;
    height: 4rem;
    .my-swpie{
        height: 100%;
    }
}

</style>