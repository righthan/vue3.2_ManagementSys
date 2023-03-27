export default {
    token: (state) => state.app.token,
    siderType: (state) => state.app.siderType,
    // 上方的siderType写成如下不行
    // siderType: (state) => {state.app.siderType} 加上return才行
    lang: (state) => state.app.lang
}