import Mock from 'mockjs';

/**
 * 模拟请求 /users时返回的数据
 */

Mock.setup({
    timeout: '200-500'
})

let data = {
    total: 15,
    pagenum: 1,
    users: [
        { id: 593, role_name: '业务员', username: 'wxq666', 'email': '@email(163.com)', create_time: 1679494204, mobile: /1\d{10,10}/, mg_state: false },
        { id: 594, role_name: '总经理', username: '李晓聪', 'email': '@email(163.com)', create_time: 1642662900, mobile: /1\d{10,10}/, mg_state: true }
    ]
}

Mock.mock('/users', 'get', data)

Mock.mock('/users', 'put', {
    meta: { code: 200, message: 'success' }
})