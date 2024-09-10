<template>
  <div>
    <TopNav/>
    <SwiperTop/>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/TopNav.vue"
import SwiperTop from "@/components/home/SwiperTop.vue"
export default {
  name: 'HomeView',
  components: {
    TopNav,SwiperTop
  }
}
</script>
