<template>
  <div class="goods" v-if="Object.keys(goods).length!==0">
  <b class="info-title">{{goods.title}}</b>
  <div class="info-price">
  <span class="n-price">{{goods.newPrice}}</span>
  <del class="o-price">{{goods.oldPrice}}</del>
  <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
  </div>
 <div class="info-other">
   <span>{{goods.columns[0]}}</span>
   <span>{{goods.columns[1]}}</span>
   <span>{{goods.services[goods.services.length-1].name}}</span>
 </div>
 <div class="info-service">
   <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
     <img :src="goods.services[index-1].icon" alt="">
     <span>{{goods.services[index-1].name}}</span>
   </span>
 </div>
  </div>
</template>

<script>
export default {
name:'DetailGoods',
props:{
  goods:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
.goods{
   padding:15px 7px
}

.info-title{
  display: block;
  color: #434240;
  font-size: 16px;
 
}
.info-price{
  padding: 10px 0;
}
.n-price{
  color: #ed7082;
  font-size: 23px;
}
.o-price{
  font-size: 12px;
  padding: 0 8px;
}
.discount{
  display: inline-block;
  border-radius: 8px;
  background-color: #ed7082;
  font-size: 10px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  vertical-align: top;
}
.info-other{
  padding: 8px 0 6px 0;
  display: flex;
  border-bottom: 1px solid #bab7b9;
}
.info-other span{
  flex: 1;
  font-size: 13px;
  color: #a7a6a6;
}
.info-other span:nth-child(2){
text-align: center;
}
.info-other span:nth-child(3){
  text-align:right
}
.info-service{
  padding:30px 0 15px 0;
  font-size: 12px;
  display: flex;
  border-bottom: 3px solid #f5f3f7;
}
.info-service-item{
  flex: 1;
  justify-content: space-between;
}
.info-service-item:nth-child(2){
  text-align:center
}
.info-service-item:nth-child(3){
  text-align:right
}
.info-service img{
width: 14px;
vertical-align: middle;
margin-top: 0;
}
</style>