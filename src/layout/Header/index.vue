<template>
    <!-- 右侧头部组件 -->
    <div class="nav-bar">
        <div class="nav-bar-left">
            <Hamburger />
            <Breadcrumb />
        </div>
        <div class="nav-bar-right">
            <Driver class="icon" />
            <ScreenFull class="icon" />
            <div>
                <svg @click="changeLanguage" t="1679147104915" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8685" width="128" height="128">
                    <path
                        d="M608 416h288c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64v-288H128c-35.36 0-64-28.48-64-64V128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v288z m0 64v64c0 35.36-28.48 64-64 64h-64v256.032c0 17.664 14.304 31.968 31.968 31.968H864a31.968 31.968 0 0 0 31.968-31.968V512a31.968 31.968 0 0 0-31.968-31.968H608zM128 159.968V512c0 17.664 14.304 31.968 31.968 31.968H512a31.968 31.968 0 0 0 31.968-31.968V160A31.968 31.968 0 0 0 512.032 128H160A31.968 31.968 0 0 0 128 159.968z m64 244.288V243.36h112.736V176h46.752c6.4 0.928 9.632 1.824 9.632 2.752a10.56 10.56 0 0 1-1.376 4.128c-2.752 7.328-4.128 16.032-4.128 26.112v34.368h119.648v156.768h-50.88v-20.64h-68.768v118.272H306.112v-118.272H238.752v24.768H192z m46.72-122.368v60.48h67.392V281.92H238.752z m185.664 60.48V281.92h-68.768v60.48h68.768z m203.84 488H576L668.128 576h64.64l89.344 254.4h-54.976l-19.264-53.664h-100.384l-19.232 53.632z m33.024-96.256h72.864l-34.368-108.608h-1.376l-37.12 108.608zM896 320h-64a128 128 0 0 0-128-128V128a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z"
                        fill="#515151" p-id="8686"></path>
                </svg>
            </div>
            <Avatar />
        </div>
    </div>
</template>

<script setup>
import Hamburger from './components/hamburger.vue'
import Breadcrumb from './components/breadcrumb.vue'
import Avatar from './components/avatar.vue'
import ScreenFull from './components/screenFull.vue';
import Driver from "./components/driver/index.vue";
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore()
const i18n = useI18n()

const changeLanguage = () => {
    if (i18n.locale.value === 'zh') {
        store.commit('app/changeLanguage', 'en')
        i18n.locale.value = 'en'
        localStorage.setItem('lang', 'en')
    } else {
        store.commit('app/changeLanguage', 'zh')
        i18n.locale.value = 'zh'
        localStorage.setItem('lang', 'zh')
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-bar-left {
        display: flex;
        align-items: center;

        .el-breadcrumb {
            margin-left: 10px;
        }
    }

    .nav-bar-right {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .icon {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
}
</style>