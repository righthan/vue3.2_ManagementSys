<!-- 汉堡菜单折叠展开 -->
<template>
    <div class="hambergur-btn" id="hamburger" @click="changeSiderType">
        <el-icon v-if="icon" color="gray">
            <Expand />
        </el-icon>
        <el-icon v-else color="gray">
            <Fold />
        </el-icon>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
/**
 * 更改菜单折叠,展开样式
 */
const changeSiderType = () => {
    store.commit('app/changeSiderType')
}

/**
 * 获取菜单样式
 */
const icon = computed(() => {
    return store.getters.siderType
});
</script>

<style lang="scss" scoped>
.hambergur-btn {
    display: inline-block;
    width: fit-content;
    cursor: pointer;

    .el-icon {
        background-color: white;
        font-size: 40px;
    }
}
</style>