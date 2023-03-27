<template>
    <!-- 定义全屏组件 -->
    <div @click="changeFullScreen" id="fullscreen">
        <svg v-if="!icon" t="1679149990585" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="11260" width="128" height="128">
            <path
                d="M240.8 196l178.4 178.4-45.6 45.6-177.6-179.2-68 68V128h180.8l-68 68z m133.6 408.8L196 783.2 128 715.2V896h180.8l-68-68 178.4-178.4-44.8-44.8zM715.2 128l68 68-178.4 178.4 45.6 45.6 178.4-178.4 68 68V128H715.2z m-65.6 476.8l-45.6 45.6 178.4 178.4-68 68H896V715.2l-68 68-178.4-178.4z"
                p-id="11261" fill="#707070"></path>
        </svg>
        <svg v-else t="1679150395317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="12182" width="128" height="128">
            <path
                d="M142.4 96.8l-44.8 44.8 173.6 174.4-68 68H384V203.2l-67.2 67.2zM752.8 316l173.6-174.4-44.8-44.8-174.4 173.6-67.2-67.2V384h180.8zM270.4 707.2l-169.6 170.4 44.8 49.6 170.4-174.4 68 68V640H203.2zM820.8 640H640v180.8l68-68 170.4 174.4 44.8-49.6-169.6-170.4z"
                p-id="12183" fill="#707070"></path>
        </svg>
    </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const icon = ref(screenfull.isFullscreen)

// 使用watch监听不到,所以使用下面的方法
const changeIcon = () => {
    icon.value = screenfull.isFullscreen
}
onMounted(() => {
    screenfull.on('change', changeIcon)
})

// 离开时取消
onBeforeUnmount(() => {
    screenfull.off('change')
})

const changeFullScreen = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle()
    }
}
</script>

<style lang="scss" scoped>
.icon {
    width: 25px;
    height: 25px;
}
</style>