<template>
  <div class="cart-list">
    <scroll class="connut" ref="scroll">
  <cart-list-item v-for="item in cartList" :item-info="item" :key="item.id"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "../../../components/common/betterScroll//Scroll";
import CartListItem from './CartListItem'
export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.cart-list {
  height:calc(100% - 49px - 44px - 40px);
}
.connut {
height: 100%;
 overflow: hidden;
}
</style>