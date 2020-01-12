import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './utils/validation.js'

// 注册vant组件
import './utils/register-vant.js'

import './styles/index.less'
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
