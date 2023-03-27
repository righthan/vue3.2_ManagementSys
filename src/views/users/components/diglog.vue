<template>
    <!-- 编辑表单对话框 -->
    <el-dialog ref="dialogRef" model-value="dialogVisible" :title="dialogTitle" width="30%" :before-close="handleClose">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="70px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
                <el-input v-model="form.mobile" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" />
            </el-form-item>
            <span>{{ props.dialogTitle }}</span>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleConfirm">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const dialogRef = ref(null)

console.log(dialogRef);
// 父组件 v-model没有指定参数名，则默认是modelValue, 如果是v-model:test='xxx'就是update:test
const emits = defineEmits(['update:modelValue'])
const handleClose = () => {
    emits('update:modelValue', false)
}

const props = defineProps({
    dialogTitle: {
        type: String,
        default: '',
        required: true
    },
    dialogTableValue: {
        type: Object,
        default: () => { }
    }
})

const formRef = ref(null)
const form = ref({
    username: '',
    password: '',
    mobile: '',
    email: ''
})


watch(() => props.dialogTableValue, () => {
    form.value = props.dialogTableValue
}, { deep: true, immediate: true })

const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度在3到10个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码长度在3到10个字符', trigger: 'blur' },
    ],
    mobile: [
        { required: true, message: '请输入电话', trigger: 'blur' },
        {
            pattern: /1\d{10}/
        }
    ],
    email: [
        {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: '请输入正确邮箱地址',
            trigger: ['blur', 'change'],
        },
    ]
})

const handleConfirm = () => {
    console.log(form);
    // 添加提交的请求代码即可

    emits('update:modelValue', false);
    ElMessage({
        message: i18n.t('message.updeteSuccess'),
        type: 'success',
    })
}
</script>

<style lang="scss" scoped></style>