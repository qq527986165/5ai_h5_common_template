import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入fastclick
import fc from 'fastclick';
// 使用fastclick
fc.attach(document.body);

// 引入自定义组件
import customComponents from './base/index';
// 注册自定义组件
customComponents.forEach((item) => {
	Vue.use(item.component, item.options);
});

// 引入通用的方法
import commonFun from './assets/js/commonFun';
// 定义通用方法
Vue.prototype.commonFun = commonFun;


// 引入过滤器filters
import filters from './assets/js/filters';
// 注册过滤器
filters.forEach((item) => {
	Vue.filter(item.name, item.fn);
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
