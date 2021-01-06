<template>
  <div class="detail">
    
    <detail-bar class="detail-bar" @titleClick="titleClick" ref="detailBar" />
    <scroll class="scroll-detail" ref="scroll" :probeType="3" @scroll="detailscroll">
      <swiper-bar :banners="banners"></swiper-bar>
      <detail-goods :goods="goods"></detail-goods>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <detail-comment-info :detailImage="detailImage" @imgLoad="detailImageLoad"></detail-comment-info>
      <detail-goods-params ref="params" :paramInfo="paramInfo"></detail-goods-params>
      <detail-discuss-info ref="discuss" :discuss="discuss"></detail-discuss-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailBar from "./childComps/DetailBar";
import SwiperBar from "./childComps/swiperBar";
import DetailGoods from "./childComps/DetailGoods";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "../../components/common/betterScroll/Scroll";
import DetailCommentInfo from "./childComps/DetailcommentInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailDiscussInfo from "./childComps/DetailDiscussInfo";
import GoodsList from "../../components/content/goods/GoodsList";
import { debounce } from "../../common/utils";
import { itemListenerMixin ,backTopMixin } from "../../common/mixin";
import DetailBottomBar from './childComps/DetailBottomBar'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  recommend
} from "../../network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      banners: [],
      goods: {},
      shop: {},
      detailImage: {},
      paramInfo: {},
      discuss: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null
    };
  },
  mixins: [itemListenerMixin,backTopMixin],
  components: {
    DetailBar,
    SwiperBar,
    DetailGoods,
    DetailShopInfo,
    Scroll,
    DetailCommentInfo,
    DetailGoodsParams,
    DetailDiscussInfo,
    GoodsList,
    DetailBottomBar
  },
  updated() {},
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //获取顶部轮播数据
      const data = res.result;
      this.banners = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //获取店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      //获取展示图片的信息
      this.detailImage = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.discuss = data.rate.list[0];
      }
    });
    recommend().then(res => {
      this.recommend = res.data.list;
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0),
        this.themeTopYs.push(-this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(-this.$refs.discuss.$el.offsetTop);
      this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
    
    }, 200);
  },
  mounted() {
    this.detailImageLoad();
  },

  methods: {
    detailImageLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },
    detailscroll(position) {
      //第一种联动写法
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (this.themeTopYs[i] >= position.y) {
       
          this.$refs.detailBar.currentIndex = i;
        }
      }
      
      this.isShowBackTop = position.y <= -581;
     
      //es6中第二种foreach方法联动写法
    //  this.themeTopYs.forEach((value,index) => {
    //    if (value >= position.y) {
    //      this.$refs.detailBar.currentIndex = index;
         
    //      }
    //  });
    },
    titleClick(index) {
      this.$refs.scroll.scoll.scrollTo(0, this.themeTopYs[index], 200);
    },
    //购物车，用Vuex
    addCart(){
      //获取购物车需要展示的信息
      const product={}
      product.image=this.banners[0]
      product.title=this.goods.title
      product.price=this.goods.realPrice
      product.desc=this.goods.desc
      product.iid=this.iid

      //把它存到vuex的state中
      this.$store.dispatch('addCart',product)
    }
  }
};
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 99;
  background-color: #fff;

}
.scroll-detail {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.detail-bar {
  position: relative;
  background-color: #fff;
  z-index: 999;
}
</style>