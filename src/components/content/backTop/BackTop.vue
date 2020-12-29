<template>
  <div class="backtop">
    <img src="../../../assets/image/back-top.png" alt="">
  </div>
</template>

<script>
export default {
name:'BackTop',
}
</script>

<style scoped>
.backtop{
  position: fixed;
  bottom: 52px;
  right: 5px;
  z-index: 999;
}
img{
  width: 45px;
}
</style>