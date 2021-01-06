import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home=()=>import('../views/home/Home.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Sort=()=>import('../views/sort/sort.vue')
const Profiles=()=>import('../views/profiles/Profiles.vue')
//详情页
const Detail=()=>import('../views/detail/Detail.vue')
//加入我是点击展示更多评论页写着玩
const More=()=>import('../common/more.vue')
//解决页面点击两下出现错误 
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes= [{
path:'',
redirect:'/home'
},{
  path:'/home',
  component:Home
},{
  path:'/cart',
  component:Cart
},{
  path:'/sort',
  component:Sort
},{
  path:'/profiles',
  component:Profiles
},{
  path:'/detail/:iid',
  component:Detail
},{
  path:'/datail/more',
  component:More
}
]

const router = new VueRouter({
  routes
})

export default router
