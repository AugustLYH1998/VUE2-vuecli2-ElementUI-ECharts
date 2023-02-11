<template>
    <div class='infoList'>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="find">
            <el-form-item>
                <el-button type="primary" @click="addStudent">新增</el-button>
            </el-form-item>
            <el-form-item label="姓名" :rules="[
                { required: true, message: '必填项', trigger: 'blur' }
            ]" prop="name">
                <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
            </el-form-item>
            <el-form-item label="父亲" :rules="[
                { required: true, message: '必填项', trigger: 'blur' }
            ]" prop="father">
                <el-input v-model="formInline.father" placeholder="请输入学生父亲姓名"></el-input>
            </el-form-item>
            <el-form-item label="母亲" :rules="[
                { required: true, message: '必填项', trigger: 'blur' }
            ]" prop="mather">
                <el-input v-model="formInline.mather" placeholder="请输入学生母亲姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="find">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="reset">查询重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table :data="table" border style="width: 100%">
            <el-table-column prop="id" label="ID" align='center'></el-table-column>
            <el-table-column prop="name" label="姓名" align='center'></el-table-column>
            <el-table-column prop="sex_text" label="性别" align='center'></el-table-column>
            <el-table-column prop="age" label="年龄" align='center'></el-table-column>
            <el-table-column prop="date" label="出生日期" align='center'></el-table-column>
            <el-table-column prop="idCard" label="身份证号" align='center'></el-table-column>
            <el-table-column prop="father" label="父亲" align='center'></el-table-column>
            <el-table-column prop="mather" label="母亲" align='center'></el-table-column>
            <el-table-column prop="address" label="家庭住址" align='center'></el-table-column>
            <el-table-column prop="time" label="入校时间" align='center'></el-table-column>
            <el-table-column prop="phone" label="联系方式" align='center'></el-table-column>
            <el-table-column label="操作" align='center' width="150">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" icon="el-icon-edit"
                        @click="updateInfo(scope.row)"></el-button>
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <Page :ParentTotal=total></Page>
        <!-- 新增信息弹窗 -->
        <el-dialog :title="state ? '添加学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="500px"
            :close-on-click-modal=close :show-close="close">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="ID" :label-width="formLabelWidth" prop="id">
                    <el-input v-model="form.id" :disabled="!state" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                    <el-radio v-model="form.sex" label="1">男</el-radio>
                    <el-radio v-model="form.sex" label="2">女</el-radio>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                    <el-input v-model.number="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" :label-width="formLabelWidth" prop="date">
                    <el-input v-model.number="form.date" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" :label-width="formLabelWidth" prop="idCard">
                    <el-input v-model.number="form.idCard" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
                    <el-input v-model="form.father" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mather">
                    <el-input v-model="form.mather" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="家庭地址" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
                    <el-input v-model="form.time" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="clear()">取消</el-button>
                <el-button type="primary" @click="sure('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { addStudent, getData, editStudent } from '../../api/api'
import Page from '../commons/Page.vue'
export default {
    name: "InfoList",
    computed: {
        table() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    components: {
        Page
    },
    created() {
        getData(this, this.url)

    },

    data() {
        return {
            // 分页数据
            total: 0, // 总条数
            url: '/info',
            pageSize: 10,
            currentPage: 1,
            formInline: {
                name: '',
                father: '',
                mather: ''
            },
            tableData: [],
            form: {
                name: "",
                sex: "1",
                age: "",
                date: "",
                idCard: "",
                father: "",
                mather: "",
                address: "",
                time: "",
                phone: ""
            },
            dialogFormVisible: false,
            state: true,
            formLabelWidth: "80px",
            close: false,
            rules: {
                id: [{ required: true, message: "请输入id" }],
                name: [{ required: true, message: "请输入姓名" }],
                sex: [{ required: true }],
                age: [{ required: true, message: "请输入年龄" },
                { type: 'number', message: '年龄必须是数字值' }],
                date: [{ required: true, message: "请输出生日期" }],
                idCard: [{ required: true, message: "请选择身份证号" }],
                address: [{ required: true, message: "请输入地址" }],
                time: [{ required: true, message: "请输入入学时间" }],
                phone: [{ required: true, message: "请输入联系方式" }]
            },
            url: 'info/'
        }
    },
    methods: {
        addStudent() {
            this.state = true
            this.dialogFormVisible = true
        },
        find() {
            this.$refs.find.validate((valid) => {
                if (valid) {
                    getData(this, '/info/', { name: this.formInline.name, father: this.formInline.father, mather: this.formInline.mather })
                }
            })
        },

        // 新增
        sure(form) {
            if (this.state) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        addStudent(this, this.url)
                        this.dialogFormVisible = false
                        getData(this, this.url)
                    }
                })
            } else {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        editStudent(this, 'info')
                        getData(this, this.url)
                        this.dialogFormVisible = false
                    }
                })
            }

        },
        // 修改
        updateInfo(row) {
            this.state = false;
            this.dialogFormVisible = true;
            this.form = row
        },
        del(row) {
            this.$confirm('你确定要删除该数据吗？学号：' + row.id, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                showClose: false,
                closeOnClickModal: false
            }).then(() => {
                this.service.delete('/info/' + row.id).then(
                    res => {
                        if (res.status === 204 || res.status === 200) {
                            this.$message({ message: '删除数据成功', type: 'success' })
                            getData(this, this.url)
                        }
                    }
                ).catch(err => {
                    console.log(err);
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            })
        },
        // 清空表单方法
        clear() {
            this.dialogFormVisible = false;
            this.$refs.form.clearValidate()
            this.form = {};
        },
        reset() {
            getData(this, this.url)
            this.currentPage = 1
            this.formInline = {}
        }
    }
}
</script>

<style lang='scss'>
.infoList {
    margin-top: 20px;

    .demo-form-inline,
    .el-form-item {
        text-align: left;
    }
}
</style>
