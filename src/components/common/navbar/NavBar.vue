<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
name:'NavBar'
}
</script>

<style>
.navbar{
  width: 100%;
  height: 44px;
  position: relative;
  display: flex;
text-align: center;
line-height: 44px;
box-shadow: 0 1px 1px rgba(100,100,100,.2);
z-index: 999;
}
.left,
.right{
  width: 60px;
}
.center{
  flex:1
}
</style>