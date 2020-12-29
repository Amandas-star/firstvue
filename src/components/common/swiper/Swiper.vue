<template>
    <van-swipe :autoplay="2000" indicator-color="red">
      <slot></slot>
    </van-swipe>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: "Swiper",
};
</script>

<style scoped>
.van-swipe{
  width: 100%;
  overflow: hidden;
}
</style>

