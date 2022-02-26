<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="图书作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm(ruleForm)">重置</el-button>
            <el-button @click="test()">test</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                author: ''
            },
            rules: {
                name: [
                    {required: true, message: '图书名称不能为空', trigger: 'blur'}
                ],
                author: [
                    {required: true, message: '作者名称不能为空', trigger: 'change'}
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            const _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('http://121.41.102.192:8181/book/save',this.ruleForm).then(function(resp){
                        if(resp.data === 'success'){
                            _this.$alert('《'+_this.ruleForm.name+'》添加成功！', '消息', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/queryBook')
                                }
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        test() {
            console.log(this.ruleForm);
        }
    }
}
</script>