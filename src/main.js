// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Validator from 'vue-validator'
import store from './store/vuexstore'
import VueResource from 'vue-resource'
import '../static/css/common/common.css'  //公共样式
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import serviceOrder from './server/serviceOrder_server/serviceOrder.js' // 服务订单相关
import wework from './server/wework/wework.js' // 众创空间相关
Vue.use(serviceOrder) // 服务订单相关
// import  filters from './filter/filters'
//
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])

Vue.use(serviceOrder); // 服务订单相关
Vue.use(wework); // 众创空间相关
Vue.use(Validator);
Vue.use(Element);
Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true;
// Vue.use(server);
new Vue({
  el: '#app',
  router,
  Element,
  store,
  Validator,
  template: '<App/>',
  components: { App},

})
