import Login from '@/view/login/login.vue'
import Main from '@/view/main/main.vue'
import NotFound from '@/view/404/404.vue'
import Form1 from '@/view/form/form1.vue'
import Form2 from '@/view/form/form2.vue'
import Table from '@/view/table/table.vue'
import Chart from '@/view/chart/chart.vue'

export default [
	{
		path: '/',
		redirect: 'home'
	},
	{
		path: '/home',
		name: 'home',
		component: Main,
		redirect: 'form1',
		meta: {
			title: '主界面'
		},
		children: [
			{
				path: '/form1',
				component: Form1,
				meta: {
					title: '常用表单'
				}
			},
			{
				path: '/form2',
				component: Form2,
				meta: {
					title: '文件上传'
				}
			},
			{
				path: '/table',
				component: Table,
				meta: {
					title: '表格页面'
				}
			},
			{
				path: '/chart',
				component: Chart,
				meta: {
					title: '图表页面'
				}
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录'
		},
		component: Login
	},
	{
		path: '*',
		name: '404',
		meta: {
			title: '404 not found'
		},
		component: NotFound
	}
]