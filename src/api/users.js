import request from "./request";

/**
 * 获取用户列表
 * @returns 
 */
export const getUsersList = () => {
    return request({
        url: '/users',
    })
}


/**
 * 更改用户的状态
 * @param {String} uid 
 * @param {Boolean} type 
 * @returns 
 */
export const changeUserState = (uid, type) => {
    return request({
        url: `/users`,
        method: 'put'
    })
}