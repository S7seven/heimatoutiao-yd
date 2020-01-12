/**
 * 封装 axios 请求模块
 */
import axios from 'axios'
import jsonBig from 'json-bigint'
import store from '@/store'

// axios.create 方法：复制一个 axios
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

export default request
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return {}
  }
}]
// 请求拦截器
axios.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Brarer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
