<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
      <back-top @click.native='backClick' v-show="isShowBackTop"></back-top>
   <scroll class="scroll" ref="scroll" :probeType="3" @scroll="cunnterScroll" :pull-up-load="true" @pullup="poadMore">
      <swiper-item :banners="banners" class="swiper-item"></swiper-item>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    
 </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SwiperItem from "../../components/common/swiper/Swiperitem";
import RecommendView from "../../views/home/childComps/RecommendVIew";
import Feature from "./childComps/Feature";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from '../../components/common/betterScroll/Scroll';
import BackTop from '../../components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from "../../network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: "pop",
    isShowBackTop:false
    };
  },
  components: {
    NavBar,
    SwiperItem,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
      this.$refs.scroll.scroll(0,0)
    },
    cunnterScroll(position){
     this.isShowBackTop=position.y<=-581
    },
    poadMore(){
       this.getHomeGoods(this.currentType)
       this.$refs.scroll.scoll.refresh()
    },
    //网络请求相关方法
    //轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //流行新款精选数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
         this.$refs.scroll.finishpullup()
      });
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: #ff1494;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.swiper-item {
  width: 100%;
}

.scroll{
  position: absolute;
  top: 40px;
  bottom:49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style> 