import {debounce} from './utils'
import backTop from '../components/content/backTop/BackTop.vue'
export const itemListenerMixin={
  data(){
    return {
      itemImgListenter:null,
      newRefresh:null
    }
  },
  mounted() {
    this.newRefresh=debounce(this.$refs.scroll.refresh,100)
    this.itemImgListenter=()=>{
      this.newRefresh()
    }
    this.$bus.$on('iteImgLoad',this.itemImgListenter)
    console.log('我是混入');
  },
}

export const backTopMixin={
  data(){
    return {
      isShowBackTop: false,
    }
  },
  components:{
    backTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scroll(0, 0);
    }
  },
  
}