import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
const router = new Router({
	routes,
	mode: 'hash'
})

const LOGIN_PAGE_NAME = 'login'
const HOME_PAGE_NAME = 'home'
router.beforeEach((to, from, next) => {
	NProgress.start()
	const user = sessionStorage.getItem('user')
	if (!user && to.name !== LOGIN_PAGE_NAME) next({name: LOGIN_PAGE_NAME})
	else if (!user && to.name === LOGIN_PAGE_NAME) next()
	else if (user && to.name === LOGIN_PAGE_NAME) next({name: HOME_PAGE_NAME})
	else next()
})
router.afterEach( route => {
	window.document.title = route.meta.title
	NProgress.done()
})

export default router