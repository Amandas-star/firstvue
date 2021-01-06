<template>
  <div>
<nav-bar>
  <div slot="left" @click="back">
    <img src="../../../assets/image/back.png">
  </div>
  <div slot="center" class="detail-bar">
    <div  v-for="(item,index) in titles" :key="item.id" class="item-bar" :class="{acctive:currentIndex===index}" @click="detailClick(index)">{{item}}</div>
  </div>
</nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
name:'DetailBar',
data(){
  return {
    titles:['商品','参数','评论','推荐'],
    currentIndex:0
  }
},
components:{
  NavBar
},
methods: {
  detailClick(index){
    this.currentIndex=index;
    this.$emit('titleClick',index)
  },
  back(){
    this.$router.back()
  }
},
}
</script>

<style scoped>
.detail-bar{
  display: flex;
}
.item-bar{
  flex: 1;
  font-size: 14px;
}
img{
  width: 17px;
}
.acctive{
  color:red
}

</style>