import Mock from 'mockjs'

const list = [];
for (let i = 0; i < 10; i++) {
    list.push(
        Mock.mock({
            name: Mock.Random.cname(),
            'age|18-40': 1,
            email: Mock.Random.email(),
            address: Mock.mock('@county(true)')
        })
    )
}

export default list
