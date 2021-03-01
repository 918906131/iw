import Vue from 'vue'
import App from './App.vue'
//引入ElementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入路由
import router from './router'
//引入组件仓库
import store from './store'
//引入服务端交互请求
import axios from "axios";
import VueAxios from 'vue-axios'
//引入样式重置文件
import './assets/css/common.css'
//引入js文件
import {
  obj
} from './assets/js/utils.js'
//引入字体图标js文件
import {
  alifont
} from './assets/alifont/font_2389285_83y444b84wh/iconfont.js'
//引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  mounted() {
    obj.setRem();
    window.onresize = obj.setRem;
    alifont
  },
  render: h => h(App)
}).$mount('#app')
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //如果token失效,则让用户重新登录
  if (response.data.status === 400) {
    router.replace('/')
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = sessionStorage.getItem('token')
  if (token) {
    config.headers['token'] = token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});