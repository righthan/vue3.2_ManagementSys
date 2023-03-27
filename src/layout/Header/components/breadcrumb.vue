<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadrumbList" :key="index" :to="item.path">{{
            $t(`menus.${item.name}`)
        }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute()
const breadrumbList = ref([])
const initBreadcrumbList = () => {
    breadrumbList.value = route.matched
    console.log(route.matched);
}

watch(route, () => {
    initBreadcrumbList()
}, {
    deep: true,
    immediate: true
})
</script>

<style lang="scss" scoped></style>