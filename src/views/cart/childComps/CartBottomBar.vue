<template>
  <div class="cart-bottom-bar">
    <div class="checked-info">
<check-button class="button" :is-checked="isSelectAll" @click.native="cartClick"></check-button>
<span>全选</span>
<div class="add">合计:{{totalPrice}}</div>
</div>
<div class="getters">去计算{{totalCount}}</div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
export default {
name:'CartBottomBar',
data(){
return {
 
}
},
components:{
  CheckButton
},
methods: {
  cartClick(){
    if(this.isSelectAll){
this.$store.state.cartList.forEach(item=>item.checked=false)
    }else{
      this.$store.state.cartList.forEach(item=>item.checked=true)
    }
  }
},
computed:{
totalPrice(){
  return this.$store.state.cartList.filter(item=>{
    return item.checked
  }).reduce((priVice,item)=>{
    return priVice+item.price*item.count
  },0).toFixed(2)
},
totalCount(){
 return this.$store.state.cartList.filter(item=>{
   return item.checked
 }).reduce((aa,item)=>{
  return aa+item.count
 },0)
},
isSelectAll(){
  //原理：先遍历整个数组，！item.checked说明 是不选中的，若不选中的长度说明里面有没有选中的，这时给他取反就是false了第一种方法
//  return !(this.$store.state.cartList.filter(item=>!item.checked
//   ).length)
//第二种方法：find方法
if(this.$store.state.cartList.length===0)return false
return !this.$store.state.cartList.find(item=>!item.checked)
}
}
}
</script>

<style scoped>
.cart-bottom-bar{
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
}
.checked-info{
  display: flex;
  align-items: center;
  line-height: 40px;
  flex: 0.7;
  margin-left: 5px;
  font-size: 13px;
}
.button{
  line-height: 20px;
  background-color: #fff;
}
.checked-info .add{
  font-size: 15px!important;
  margin-left: 10px;
}
.getters{
  flex: 0.3;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
</style>