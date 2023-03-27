import { login as loginApi } from '@/api/login';
import router from '../../router';
import { setTokenTime } from '../../utils/auth';

export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || '',
        // 侧边栏是否折叠
        siderType: true,
        // 语言切换
        lang: localStorage.getItem('lang') || 'zh'
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        changeSiderType(state) {
            state.siderType = !state.siderType
        },
        changeLanguage(state, lang) {
            state.lang = lang
        }
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo).then((res) => {
                    setTokenTime()
                    commit('setToken', res.data.token)
                    router.replace('/')
                    resolve()
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        logout({ commit }) {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        }
    }
}