<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="checkeClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片"/>
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{itemInfo.price}}</div>
        <div class="item-count">
         x{{itemInfo.count}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  data() {
    return {
      conn:4
    };
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
   checkeClick(){
     this.itemInfo.checked=!this.itemInfo.checked
     
   }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 2px 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 8px 10px;
  position: relative;
  overflow: hidden;
}
.item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  position: absolute;
  bottom: 10px;
  left: 5px;
  right: 15px;
  margin: auto;
}
.item-price {
  color: orangered;
  float: left;
}
.item-count {
  text-align: right;
}
</style>