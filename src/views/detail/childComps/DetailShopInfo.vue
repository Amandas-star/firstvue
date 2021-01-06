<template>
  <div class="shopInfo">
    <div>
      <img :src="shop.logo" alt />
      <span class="shop-info">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
    <div class="info-sells">
      <b class="info-count">{{shop.sells | sellCountFilter}}</b>
      <div class="sells-text">总销量</div>
    </div>
    <div class="info-goodsr">
      <b class="info-count">{{shop.goodsCount}}</b>
      <div class="sells-text">全部宝贝</div>
    </div>
</div>
<div class="shop-middle-item shop-middle-right">
  <table>
    <tr v-for="(item,index) in shop.score" :key="index">
      <td>{{item.name}}</td>
      <td class="score" :class="{'better-scroe':item.isBetter}">{{item.score}}</td>
      <td class="more" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
    </tr>
  </table>
</div>

    </div>
    <div class="stroll">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shopInfo {
  padding: 0 7px;
}
img {
  width: 45px;
  border: 2px solid #f4f3f6;
  border-radius: 45px;
}
.shop-info {
  padding: 0 10px;
}
.shop-middle{
  display: flex;
  padding: 30px 0;
}
.shop-middle-item{
  flex: 1;
  height: 40px;
  display: flex;
}
.shop-middle-item div{
  flex: 1;
  text-align: center;
}

.info-goodsr{
  border-right: 2px solid #ccc;
}
.info-count{
  color: black;
}

.shop-middle-right table{
flex: 1;
margin-left: 30px;
font-size: 12px;
margin-top: -22px;
}
.shop-middle-right table tr{
  line-height: 30px;
}

.sells-text{
  font-size: 10px;
  margin-top: 5px;
}
.better-more{
  display: inline;
background-color: #d96766!important;
color: #fff;
}
.more{
  display: inline;
background-color: #859379;
color: #fff;
}
.better-scroe{
  color: #d96766!important;
}
.scroe{
  color:#859379 ;
}
.stroll{
 margin: 0 auto;
 width: 40%;
 font-size: 12px;
padding:5px;
margin-top:15px;
 background-color: #f2f5fc;
 text-align: center;
 border-radius: 10px;
}
</style>