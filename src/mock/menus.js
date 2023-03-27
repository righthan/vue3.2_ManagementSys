import Mock from 'mockjs';

/**
 * 模拟请求 /menus时返回的数据
 */

Mock.setup({
    timeout: '200-500'
})

let data = {
    "menus|5": [
        {
            "id|+1": 100,
            "authName|+1": [
                'users',
                'rights',
                'goods',
                'orders',
                'reports'
            ],
            "childrenMenus|+1": [
                [{ "id": 201, "authName": '用户列表', "path": 'users' }],
                [{ "id": 201, "authName": '角色列表', "path": 'roles' }, { "id": 201, "authName": '权限列表', "path": 'rights' }],
                [{ "id": 201, "authName": '商品列表', "path": 'goods' }],
                [{ "id": 201, "authName": '订单列表', "path": 'orders' }],
                [{ "id": 201, "authName": '数据统计', "path": 'reports' }]
            ],
            "path|+1": [
                'users',
                'rights',
                'goods',
                'orders',
                'reports'
            ],
            "order|+1": 1
        }
    ]
}

Mock.mock('/menus', 'get', data)