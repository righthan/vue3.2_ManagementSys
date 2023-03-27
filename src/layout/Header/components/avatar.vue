<!-- 头像 -->
<template>
    <el-dropdown>
        <img class="avatar" src="../../../assets/avatar.jpg" alt="avatar">
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const logout = () => {
    store.dispatch('app/logout')
}
</script>

<style>
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
</style>r