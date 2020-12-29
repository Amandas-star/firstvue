<template>
  <div class="tabbar">
<slot></slot>
  </div>
</template>

<script>
export default {
name:'TabBar'
}
</script>

<style>
.tabbar{
  display: flex;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
}
</style>