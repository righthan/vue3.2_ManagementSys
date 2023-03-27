<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <h2>{{ $t('login.title') }}</h2>
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" :prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" :prefix-icon="Lock"
                    show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)" class="login-btn">{{ $t('login.btnTitle')
                }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const ruleFormRef = ref(null);
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度在3到10个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码长度在3到10个字符', trigger: 'blur' },
    ]
})

const ruleForm = reactive({
    username: '',
    password: ''
})

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            store.dispatch('app/login', ruleForm);
        } else {
            console.log('error submit!', fields);
            return false
        }
    })
}
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png");
    text-align: center;
    overflow-x: hidden;

    .demo-ruleForm {
        margin: 200px auto;
        width: 500px;
        padding: 40px;
        background-color: white;
        border-radius: 10px;
    }

    .login-btn {
        width: 100%;
    }

    h2 {
        margin-bottom: 10px;
    }
}
</style>