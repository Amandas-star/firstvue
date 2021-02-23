<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/image/tabbar/icon01.png" slot="img" />
      <img src="../../assets/image/tabbar/icon01_active.png" slot="image" />
      <p slot="text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <img src="../../assets/image/tabbar/icon02.png" slot="img" />
      <img src="../../assets/image/tabbar/icon02_active.png" slot="image" />
      <p slot="text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="../../assets/image/tabbar/icon03.png" slot="img" />
      <img src="../../assets/image/tabbar/icon03_active.png" slot="image" />
      <p slot="text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profiles">
      <img src="../../assets/image/tabbar/icon04.png" slot="img" />
      <img src="../../assets/image/tabbar/icon04_active.png" slot="image" />
      <p slot="text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>