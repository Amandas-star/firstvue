<template>
  <div class="bottom-detail">
    <div class="bottom-info">
      <div class="botton-left">
        <div class="services">
          <img src="../../../assets/image/detail/icon01.png" alt="">
          <p>客服</p>
        </div>
        <div class="shop">
          <img src="../../../assets/image/detail/icon02.png" alt="">
          <p>店铺</p>
        </div>
        <div class="collect">
          <img src="../../../assets/image/detail/icon03.png" alt="">
          <p>收藏</p>
        </div>
      </div>
      <div class="bottom-right">
        <div class="cart" @click="add">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'DetailBottomBar',
methods: {
  add(){
    this.$emit('addCart')
    alert('已加入')
  }
},
}
</script>

<style scoped>
.bottom-detail{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.bottom-info{
  height: 49px;
  background-color: #ffff;
  display: flex;
}
.bottom-info div{
  flex: 1;
}
.botton-left{
  display: flex;
}
.botton-left div{
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.botton-left img{
  vertical-align: middle;
  margin-top: 5px;
}
.bottom-right{
  display: flex;
   background-color: #f1d83f;
   color: black;
}
.bottom-right div{
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.bottom-right .buy{
  background-color: #ff779b;
  color: #fff;
}

</style>