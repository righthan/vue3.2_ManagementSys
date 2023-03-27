/**
 * 转换日期格式, 用于将时间戳转换为年月日格式
 */

import dayjs from 'dayjs'

const filterTimes = (val, format = 'YYYY-MM-DD') => {
    if (!isNull(val)) {
        val = parseInt(val) * 1000  // 10位的时间戳转换
        return dayjs(val).format(format)
    } else {
        // 时间不正确时,返回 --
        return '--'
    }
}

/**
 * 判断传入参数是否为空
 * @param {*} date 
 * @returns 
 */
export const isNull = (date) => {
    if (!date) return true
    if (JSON.stringify(date) === '{}') return true
    if (JSON.stringify(date) === '[]') return true
}

// 将filterTimes设置为全局属性
export default (app) => {
    app.config.globalProperties.$filters = {
        filterTimes
    }
}