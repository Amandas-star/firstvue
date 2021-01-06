<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="cart-info">购物车({{certLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    
<cart-list></cart-list>
<cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex'
export default {
name:'Cart',
components:{
  NavBar,
  CartList,
  CartBottomBar
},
computed:{
  ...mapGetters(['certLength'])
}
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: #ff8d97;
  color: #fff;
  font-weight: 700;
}
</style>