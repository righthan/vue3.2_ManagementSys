import Mock from 'mockjs'

/**
 * 模拟请求 /login时返回的数据
 */

const Random = Mock.Random
Mock.setup({
    timeout: '200-600' // 模拟随机网络延迟
})

let data = {
    code: 0,
    msg: 'success',
    data: {
        'phone': /1\d{10,10}/,
        'token': /\w{15,15}/
    }
}
Mock.mock('/login', 'post', data)