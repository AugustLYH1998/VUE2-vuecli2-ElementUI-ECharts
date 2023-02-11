// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import service from './service'
import * as echarts from 'echarts';

Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.axios = axios //挂载到原型 可全局使用
Vue.prototype.service = service //挂载到原型 可全局使用
Vue.prototype.echarts = echarts//挂载到原型 可全局使用




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
