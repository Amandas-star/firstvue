<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
 props:{
   probeType:{
    type:Number,
    default(){
      return 0
    }
   },
   pullUpLoad:{
     type:Boolean,
     defautl:false
   }
 },
  data(){
    return {
      scoll:null
    }
  },
  mounted() {
    this.scoll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.scoll.on('scroll',(position)=>{
     this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scoll.on('pullingUp',()=>{
      this.$emit('pullup')
    

    })
    // this.scoll.scrollTo(0,0) //可以返回顶部的方法
  },
  methods: {
    scroll(x,y,time=300){
      this.scoll.scrollTo(x,y,time)
    },
    finishpullup(){
      this.scoll.finishPullUp()
    }
  },
};
</script>


<style scoped>
</style>