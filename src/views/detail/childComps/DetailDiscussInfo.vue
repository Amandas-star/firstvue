<template>
  <div v-if="Object.keys(discuss).length!==0" class="discuss-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more" @click="more">更多</div>
    </div>
    <div class="info-batter">
      <img :src="discuss.user.avatar" alt />
      <span>{{discuss.user.uname}}</span>
    </div>
    <div class="info-content">{{discuss.content}}</div>
    <div v-if="discuss.explain" class="info-explain">{{discuss.explain}}</div>
    <div class="info-style">
      <span>{{discuss.created|showDate}}</span>
      <span>{{discuss.style}}</span>
    </div>
    <div class="info-images">
      <img v-if="discuss.images" :src="discuss.images[0]" alt />
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  name: "DiscussInfo",
  props: {
    discuss: {}
  },
  methods: {
    more() {
      this.$router.push("/datail/more");
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.discuss-info {
  padding: 18px 8px;
}
.info-header {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 3px solid #f2f5f8;

  font-size: 13px;
}
.header-title {
  flex: 1;
}
.info-batter {
  padding: 10px 0;
}
.info-batter img {
  width: 48px;
  border-radius: 48px;
  margin-right: 15px;
}
.info-content {
  font-size: 13px;
  line-height: 19px;
  padding-bottom: 8px;
}
.info-images img {
  width: 30%;
}
.info-explain {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 10px;
  margin-bottom: 10px;
}
.info-style {
  font-size: 14px;
}
.info-style span:nth-child(1){
  margin-right: 8px;
}
</style>