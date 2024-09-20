<template>
  <div>
    <TopNav/>
    <SwiperTop/>
    <IconList/>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/TopNav.vue"
import SwiperTop from "@/components/home/SwiperTop.vue"
import IconList from "@/components/home/IconList.vue"
export default {
  name: 'HomeView',
  components: {
    TopNav,SwiperTop,IconList,
  }
}
</script>
