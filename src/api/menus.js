import request from "./request";

/**
 * 获取菜单项
 * @returns 
 */
export const getMenuList = () => {
    return request({
        url: '/menus'
        // 请求为get可以不写
    })
}
