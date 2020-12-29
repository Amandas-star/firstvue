<template>
  <swiper>
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageload" />
      </a>
    </van-swipe-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "homeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    // imageload函数的判断式
    return {
      isload:false
    }
  },
  components: {
    Swiper
  },
  methods: {
    imageload(){
      // 让发布给父组件的数据只发出一次，提高代码性能
      if(!this.isload){
      this.$emit('swiperimageload')
      this.isload = true
      }
    }
  },
};
</script>

<style scoped>
.van-swipe-item{
  float: left;
}
img {
  width: 100%;
  vertical-align: middle;
}
</style>