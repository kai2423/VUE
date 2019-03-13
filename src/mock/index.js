import Mock from 'mockjs'
import user from './data/user'
import list from './data/list'

Mock.mock('/getLogin', 'post', option => {
    let loginUser = JSON.parse(option.body)
    if (loginUser.username === 'aszed' && loginUser.password === 'admin') {
        return {
            success: true,
            userInfo: user
        }
    } else {
        return {
            success: false
        }
    }
})
Mock.mock('/getList', 'get', list)

export default Mock