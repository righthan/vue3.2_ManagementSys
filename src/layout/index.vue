<template>
    <div class="layout">
        <el-container>
            <el-aside :width="asideWidth">
                <Menu />
            </el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore()

// 根据菜单是否折叠确定el-aside的宽度, 初始展开时不能是fit-content
// 否则会因为右侧界面加载更快而导致布局突变
const asideWidth = computed(() => {
    return store.getters.siderType ? '180px' : 'fit-content';
})


</script>

<style lang="scss" scoped>
.layout {
    .el-aside {
        background-color: rgb(84, 92, 100);
        height: 100vh;
        overflow-y: hidden;
    }
}
</style>