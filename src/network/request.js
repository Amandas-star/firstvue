import axios from 'axios'

export function request(config){
const instance=axios.create({
  baseURL:'http://152.136.185.210:8000',
  timeout:5000
})

//请求拦截
instance.interceptors.request.use(config=>{
  return config
})
//响应拦截
instance.interceptors.response.use(res=>{
  return res.data
})
//发送网络请求
return instance(config)
}