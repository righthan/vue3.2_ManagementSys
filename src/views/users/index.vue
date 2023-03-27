<template>
  <!-- 用户界面组件 -->
  <el-card>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-input :placeholder="$t('table.placeholder')" clearable v-model="queryForm.query"></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="handleSearch(queryForm)">{{ $t('table.search') }}</el-button>
      <el-button type="primary" @click="handleDialogValue()">{{ $t('table.adduser') }}</el-button>
    </el-row>
  </el-card>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :width="item.width" v-for="(item, index) in options" :prop="item.prop"
      :label="$t(`table.${item.label}`)" :key="index">
      <template v-slot="{ row }" v-if="item.prop === 'create_time'">{{ $filters.filterTimes(row.create_time) }}</template>
      <!-- 需要使用v-slot解构row, 而不能是使用item.mg_state -->
      <template v-slot="{ row }" v-if="item.prop === 'mg_state'"> <el-switch v-model="row.mg_state"
          @change="changeState(row)" /></template>
      <!-- 使用v-if如果是action列才渲染按钮,否则每列都渲染按钮 -->
      <template #default="{ row }" v-if="item.prop === 'action'">
        <el-button type="primary" size="small" :icon="Edit" @click="handleDialogValue(row)"></el-button>
        <el-button type="warning" size="small" :icon="Setting"></el-button>
        <el-button type="danger" size="small" :icon="Delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <Dialog v-model="dialogVisible" :title="dialogTitle" :dialogTableValue="dialogTableValue" v-if="dialogVisible" />
</template>

<script setup>
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import { getUsersList, changeUserState } from '@/api/users';
import { options } from './options'
import { useI18n } from 'vue-i18n'
import Dialog from './components/diglog.vue'
import { isNull } from '@/utils/filters';

const queryForm = reactive({
  query: '',
  pageNum: 1,
  pageSize: 2
})
const tableData = ref([])

const initGetUsersList = async () => {
  const res = await getUsersList(queryForm);
  tableData.value = res.users
}

initGetUsersList()

const handleSearch = (form) => {
  tableData.value = tableData.value.filter(val => {
    return val.username.indexOf(form.query) !== -1
  })
}

const i18n = useI18n()
const changeState = async (info) => {
  const res = await changeUserState(info.id, info.mg_state)
  if (res.meta.code == 200) {
    ElMessage({
      message: i18n.t('message.updeteSuccess'),
      type: 'success',
    })
  }
}


const dialogVisible = ref(false)
const dialogTitle = ref(null)
const dialogTableValue = ref(null)

// 添加用户和编辑表单使用同一个组件, 若传入row参数则为编辑用户,否则为添加用户
const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = "添加用户"
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = "编辑用户"
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}

</script>

<style lang="scss" scoped></style>
