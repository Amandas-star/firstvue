<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      defautl: false
    }
  },
  data() {
    return {
      scoll: null
    };
  },
  mounted() {
    this.scoll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    //监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scoll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    // this.scoll.scrollTo(0,0) //可以返回顶部的方法

    //监听上拉事件
    if (this.pullUpLoad) {
      this.scoll.on("pullingUp", () => {
         this.$emit("pullingUp");
      });
     
    }
  },
  methods: {
    scroll(x, y, time = 300) {
      this.scoll && this.scoll.scrollTo && this.scoll.scrollTo(x, y, time);
    },
    finishpullup() {
      this.scoll && this.scoll.finishPullUp();
    },
    refresh() {
      this.scoll && this.scoll.refresh();
    }
  }
};
</script>


<style scoped>
</style>