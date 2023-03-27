<template>
    <!-- 网页左侧菜单组件 -->
    <div>
        <el-menu collapse-transition="false" active-text-color="#ffd04b" background-color="#545c64"
            class="el-menu-vertical-demo" text-color="#fff" @open="handleOpen" @close="handleClose" router unique-opened
            default-active="users" :collapse="!$store.getters.siderType">
            <el-sub-menu :index="item.path" v-for="(item, index) in menusList.menus" :key="item.id">
                <template #title>
                    <el-icon>
                        <component :is="iconList[index]"></component>
                    </el-icon>
                    <span>{{ $t(`mainMenu.${item.authName}`) }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="it in item.childrenMenus" :index="it.path" :key="it.id">
                        {{ $t(`menus.${it.path}`) }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

        </el-menu>
    </div>
</template>

<script setup>
import { getMenuList } from '@/api/menus';
import { ref } from 'vue';

const menusList = ref([])
// 图标列表
const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const initMenusList = async () => {
    menusList.value = await getMenuList()
}
initMenusList()
</script>

<style lang="scss" scoped>
.el-menu {
    border-right: 0;
}
</style>