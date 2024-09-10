<template>
  <div id="SwiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
    
</template>

<script>
import axios from 'axios';
import { reactive,onMounted } from 'vue';
import{getBanner} from '@/request/api/home.js'
export default {
  setup() {
    const state = reactive({
      images:[
      
    ]
    } )
    onMounted(async ()=>{
      let res = await getBanner();
      console.log(res);
      state.images=res.data.banners;
  })
    return { state };
  },
};
</script>
<style lang="less">
#SwiperTop{
  .van-swipe{
    width: 100%;
    padding-top: 10px;
    .van-swipe__indicator--active{
      background-color:  rgb(255, 0, 85);
    }
      .van-swipe-item{
        padding: 0 0.2rem;
        img{
          width:  100%;
          height: 150px;
          border-radius: 0.2rem;
        }
      }
      }
  }

</style>
