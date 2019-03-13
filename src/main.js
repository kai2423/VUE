import Vue from 'vue'
import App from './app'
import axios from 'axios'
import store from './store'
import router from './router'
import echarts from 'echarts'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
// 实际打包时不引入mock
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts 

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
