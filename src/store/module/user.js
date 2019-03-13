export default {
	state: {
		user: {

		}
	},
	mutations: {
		setUsername(state, name) {
			state.user.username = name
		},
		setAge(state, age) {
			state.user.age = age
		},
		setSex(state, sex) {
			state.user.sex = sex
		}
	},
	actions: {
		handleLogin(context, user) {
			context.commit('setUsername', user.username)
			context.commit('setAge', user.age)
			context.commit('setSex', user.sex)
		},
		handleLogout(context) {
			context.commit('setUsername', '')
			context.commit('setAge', 0)
			context.commit('setSex', '')
		},
		getUserInfo(context) {
			const user = JSON.parse(sessionStorage.getItem('user'))
			context.commit('setUsername', user.username)
			context.commit('setAge', user.age)
			context.commit('setSex', user.sex)
		}
	}
}