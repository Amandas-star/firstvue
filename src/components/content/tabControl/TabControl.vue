<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="item.id" class="control" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
 </div>
</template>

<script>
export default {
name:'TabControl',
props:{
  title:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return {
    currentIndex:0,
  }
},
methods: {
  itemClick(index){
    this.currentIndex=index
    this.$emit('tabClick',index)
  }
},
}
</script>

<style>
.tab-control{
  display: flex;
   text-align: center;
   font-size: 15px;
   height: 40px;
   line-height: 40px;
   background-color: #fff;
   z-index: 999;
}
.control{
   flex: 1;
}
span{
   padding: 5px;
}
.active span{
  border-bottom: 3px solid red;
 
}
.active{
  color: red;
}
</style>