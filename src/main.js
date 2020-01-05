import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册vant组件
import './utils/register-vant.js'
// import {
//   Button,
//   Cell,
//   CellGroup
// } from 'vant'

// Vue.use(Button)
//   .use(Cell)
//   .use(CellGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
