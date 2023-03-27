import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

/**
 * token时间失效后, 强制退出
 */

export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, Date.now())
}

export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME)
}

// 检查token是否过期
export const diffTokenTime = () => {
    const currentTime = Date.now()
    const tokenTime = getTokenTime()
    return currentTime - tokenTime > TOKEN_TIME_VALUE
}