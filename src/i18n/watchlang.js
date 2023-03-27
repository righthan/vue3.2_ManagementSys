import { watch } from 'vue';
import store from '@/store';

/**
 * 解决切换语言引导按钮语言不变的问题
 * @param  {...any} cbs 
 */
export const watchLang = (...cbs) => {
    watch(() => store.getters.lang,
        () => {
            cbs.forEach((cb) => cb(store.getters.lang))
        }, {
        deep: true
    })
}