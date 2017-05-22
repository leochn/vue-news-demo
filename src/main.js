import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './routeConfig.js'


Vue.use(VueRouter);


require('./assets/css/base.css'); //引入全局的base文件
const router = new VueRouter({
	routes
});

//axios 配置信息

//配置发送请求的信息
axios.interceptors.request.use(function(config){
	//stores.dispatch('showLoading');
	return config;
},function(error){
	return Promise.reject(error);
});


axios.interceptors.response.use(function(response){
	return response;
},function(error){
	return Promise.reject(error);
});

Vue.prototype.$http = axios; //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
