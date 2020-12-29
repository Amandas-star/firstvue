<template>
  <div class="tab-item" @click="btn">
    <div v-if="!acctive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="image"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    acctive() {
      return this.$route.path.indexOf(this.path)!==-1;
    },
    activeStyle(){
      return this.acctive?{color:this.activeColor}:{}
    }
  },
  methods: {
    btn() {
      this.$router.push(this.path);
      this.styleClass = this.acctive
        ? (this.styleClass = this.styleClass)
        : (this.styleClass = {});
    }
  }
};
</script>

<style>
.tab-item {
  flex: 1;
  text-align: center;
}
img {
  width: 24px;
  vertical-align: middle;
  margin: 4px 0 3px 0;
}
p {
  font-size: 12px;
}
</style>