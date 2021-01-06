<template>
 <swiper class="swiper">
    <van-swipe-item v-for="(item,index) in banners" :key="index">
     <img :src="item">
    </van-swipe-item>
    </swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
export default {
name:'SwiperBar',
props:{
  banners:{
    type:Array,
    default(){
      return []
    }
  }
},
components:{
Swiper
},
data(){
  return {

  }
}
}
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
.van-swipe-item{
  float: left;
  
}
img {
  width: 100%;
  vertical-align: middle;
  margin: 0;
}
</style>