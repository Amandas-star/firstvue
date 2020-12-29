<template>
  <div class="recommend">
   <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
   </div>
  </div>
</template>

<script>
export default {
name:'RecommendView',
props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 7px solid #efefef;
}
.recommend .recommend-item{
  flex: 1;
  text-align: center;
}
img{
  width: 67px;
  height: 67px;
  margin-bottom: 10px;
}
</style>