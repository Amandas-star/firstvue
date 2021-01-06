<template>
  <div class="goods-info" v-if="Object.keys(detailImage).length!==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailImage.desc}}</div>
      <div class="end"></div>
    </div>

    <div class="info-key">{{detailImage.detailImage[0].key}}</div>
    <div class="info-list">
      <img  v-for="(item,index) in detailImage.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="" />
    </div>
    <div v-if="detailImage.detailImage[1]">{{detailImage.detailImage[1].key}}</div>
    <div v-if="detailImage.detailImage[1]" class="info-key">
      <img v-for="(item,index) in detailImage.detailImage[1].list" :key="index" :src="item" alt="">
    </div>
    <div v-if="detailImage.detailImage[2]">{{detailImage.detailImage[2].key}}</div>
    <div v-if="detailImage.detailImage[2]" class="info-key">
      <img v-for="(item,index) in detailImage.detailImage[2].list" :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  data() {
    return {
      imagesLength: 0,
      connent: 0
    };
  },
  props: {
    detailImage: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      
        this.$emit('imgLoad');
      
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailImage.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  margin: 15px;
}
.start,
.end {
  width: 30%;
  border: 0.5px solid #d5d3d5;
  position: relative;
}
.start::before {
  content: "";
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: -2px;
}
.desc {
  padding: 12px 0;
  font-size: 13px;
}
.end {
  float: right;
}
.end::before {
  content: "";
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
  right: -2px;
}
.info-key {
  padding: 5px 12px;
  color: #706f70;
}
img {
  width: 100%;
}
</style>