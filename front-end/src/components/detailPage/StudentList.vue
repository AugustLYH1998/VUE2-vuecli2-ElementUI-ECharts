<template>
    <div>
        <div class="StudentList">

            <!-- 查找框 -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline" ref="find">
                <el-form-item>
                    <el-button type="primary" @click="onAdd">新增</el-button>
                </el-form-item>
                <el-form-item label="姓名" :rules="[
                    { required: true, message: '请输入姓名！', trigger: 'blur' }
                ]" prop="name">
                    <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
                </el-form-item>

                <el-form-item label="学号" :rules="[{
                    required: true, message: '请输入学号！', trigger: 'blur'
                }]" prop="number">
                    <el-input v-model="formInline.number" placeholder="请输入学号查询"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="getData()">查询重置</el-button>
                </el-form-item>

            </el-form>

            <!-- 表单列表 -->
            <el-table :data="table" border style="width: 100%">
                <el-table-column prop="id" label="ID" align="center"></el-table-column>
                <el-table-column prop="number" label="学号" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="gender" label="性别" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="class" label="班级" align="center"></el-table-column>
                <el-table-column prop="status" label="状态" align="center"></el-table-column>
                <el-table-column prop="address" label="地址" align="center"></el-table-column>
                <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
                <el-table-column fixed="right" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="updateInfo(scope.row)" type="primary" size="mini"
                            icon="el-icon-edit"></el-button>
                        <el-button @click="del(scope.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 前端分页 -->
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="pageSize"
                layout=" sizes, prev, pager, next,  total , jumper" :total="total">
            </el-pagination>
        </div>
        <!-- 新增信息弹窗 -->
        <el-dialog :title="ifAdd ? '新增学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="600px" class="form"
            :show-close="showclose" :close-on-click-modal="modal">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="学号" :label-width="formLabelWidth" prop="number">
                    <el-input v-model.number="form.number" autocomplete="off" :disabled="!ifAdd"></el-input>
                </el-form-item>

                <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="性别" :label-width="formLabelWidth" prop="gender">
                    <el-radio label="1" v-model="form.gender">男</el-radio>
                    <el-radio label="2" v-model="form.gender">女</el-radio>
                </el-form-item>

                <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                    <el-input v-model.number="form.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="班级" :label-width="formLabelWidth" prop="class">
                    <el-select v-model="form.class" placeholder="请选择班级" style="text-align: left;">
                        <el-option label="小1班" value="1"></el-option>
                        <el-option label="小2班" value="2"></el-option>
                        <el-option label="小3班" value="3"></el-option>
                        <el-option label="小4班" value="4"></el-option>
                        <el-option label="小5班" value="5"></el-option>
                        <el-option label="小6班" value="6"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
                    <el-select v-model="form.status" placeholder="请选择状态" style="text-align: left;">
                        <el-option label="入学" value="1"></el-option>
                        <el-option label="未入学" value="2"></el-option>
                        <el-option label="休学中" value="3"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model.number="form.phone" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="clearList()">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false; addStudent(form)">确 定</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
export default {
    name: "StudentList",
    computed: {
        table() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },

    data() {
        return {
            // 表单验证规则
            rules: {
                number: [{ required: true, message: "请输入学号" },
                { type: 'number', message: '学号必须是数字值' }],
                name: [{ required: true, message: "请输入姓名" }],
                gender: [{ required: true }],
                age: [{ required: true, message: "请输入年龄" },
                { type: 'number', message: '年龄必须是数字值' }],
                class: [{ required: true, message: "请选择班级" }],
                status: [{ required: true, message: "请选择状态" }],
                address: [{ required: true, message: "请输入地址" }],
                phone: [{ required: true, message: "请输入联系方式" }, ]
            },

            dialogFormVisible: false,
            formLabelWidth: '100px',

            // 修改、新增共用一个弹窗判断
            ifAdd: '',

            // 是否显示关闭按钮
            showclose: false,

            // 是否可以通过点击 modal 关闭 Dialog（点击空白处）
            modal: false,

            formInline: {
                name: '',
                number: ''
            },
            form: {
                name: '',
                gender: '1',
                age: '',
                number: '',
                class: '1',
                status: '1',
                address: '',
                phone: ''
            },
            // 伪数据
            tableData: [
                //     {
                //     name: '木子李',
                //     gender: '1',
                //     age: 22,
                //     number: 1,
                //     class: '1',
                //     status: '1',
                //     address: '上海市普陀区金沙江路 1518 弄',
                //     phone: 12345678911
                // }
            ],
            // 分页
            currentPage: 1,// 当前页数
            total: 0, //总条数
            pageSize: 10// 每页显示条数 
        }
    },

    created() {
        this.getData();
        // console.log(this.form);
    },
    methods: {
        // 获取服务器内学生数据的方法
        getData() {
            // console.log(this.service.get('/student'));
            //接口返回的是promise对象
            this.service.get('/student').then(res => {
                if (res.status === 200) {
                    // 获得分页总数量
                    this.total = res.data.length
                    // 循环每一项 更改状态为中文
                    res.data.forEach(item => {
                        item.gender == "1" ? item.gender = '男' : item.gender = '女'
                        if (item.status == '1') {
                            item.status = "已入学"
                        } else if (item.status == "2") {
                            item.status = "未入学"
                        } else {
                            item.status = "休学中"
                        }
                    });
                    this.tableData = [...res.data]
                }
                else {
                    console.error('请求列表错误');
                }
            }).catch(err => {
                console.log(err);
            })
            return this.tableData
        },

        // 清空列表方法
        clearList() {
            this.dialogFormVisible = false;
            // elemenentui对整个表单进行重置，将所有字段值重置为初始值并移除校验结果。
            this.$refs.form.resetFields()
        },

        // 修改
        updateInfo(row) {
            this.ifAdd = false
            this.dialogFormVisible = true;
            let tmp = { ...row };
            tmp.gender === '男' ? tmp.gender = '1' : tmp.gender = '2';
            this.form = { ...tmp }
        },
        // 删除功能
        del(row) {
            this.$confirm('你确定要删除该数据吗？id：' + row.id, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                showClose: false,
                closeOnClickModal: false
            }).then(() => {
                // 根据id删除
                this.service.delete('/student/' + row.id).then(
                    res => {
                        // console.log(res)
                        if (res.status === 204 || res.status === 200) {
                            this.$message({ message: '删除数据成功', type: 'success' })
                            this.getData()
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

        // 姓名 学号查询
        onSubmit() {
            this.$refs.find.validate((valid) => {
                if (valid) {
                    this.service.get('/student', {
                        params: { name: this.formInline.name, id: this.formInline.id }
                    }).then(
                        res => {
                            if (res.status === 200) {
                                console.log(res);
                                // 分页
                                this.total = res.data.length
                                // 循环每一项 更改状态为中文
                                res.data.forEach(item => {
                                    item.gender === "1" ? item.gender = '男' : item.gender = '女'
                                    if (item.status == '1') {
                                        item.status = "已入学"
                                    } else if (item.status == "2") {
                                        item.status = "未入学"
                                    } else {
                                        item.status = "休学中"
                                    }
                                });
                                this.tableData = [...res.data]
                            }
                        }
                    ).catch(err => { console.log(err); })
                } else {
                    console.error();
                }
            })
        },

        // 弹出添加框
        onAdd() {
            this.ifAdd = true
            this.dialogFormVisible = true;
        },
        // 添加
        addStudent(form) {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 判断是添加还是修改
                    if (this.ifAdd) {
                        // 添加id
                        form = { ...form, id: form.number }
                        // 调用添加接口
                        this.service.post('/student', form).then(res => {
                            if (res.status === 201) {
                                this.$message({ message: '新增数据成功', type: 'success' })
                                // 清空表单数据
                                this.clearList();
                                this.getData();
                            }
                        }).catch(err => {
                            console.log(err);
                            this.$message({
                                message: err.message + ' 错误原因：' + err.response.data, type: 'error', duration: 5000, showClose: true
                            })
                        })
                    } else {
                        // 修改
                        if (this.form.status == '已入学' || this.form.status == '1') {
                            this.form.status = 1
                        } else if (this.form.status == '未入学' || this.form.status == '2') {
                            this.form.status = 2
                        } else this.form.status = 3

                        this.service.patch('/student/' + this.form.id, this.form).then(
                            res => {
                                if (res.status === 201 || res.status === 200) {
                                    this.$message({ message: '修改数据成功', type: 'success' })
                                    // console.log(res);
                                    this.getData();
                                } else {
                                    this.$message({ message: '修改数据失败', type: 'warn' })
                                }
                            }).catch(
                                err => {
                                    console.log(err);
                                }
                            )
                    }
                }
                else {
                    console.error('验证失败');
                    this.dialogFormVisible = true;
                }
            })
        },
        // 分页
        handleSizeChange(val) {
            this.pageSize = val
        },
        handleCurrentChange(val) {
            this.currentPage = val
        }


    }
}
</script>

<style lang="scss" scoped>
* {
    text-align: left;
}

.StudentList {
    margin-top: 20px;

    .demo-form-inline {
        text-align: left;
    }
}

.form {
    .el-input {
        width: 250px;
    }

    .dialog-footer {
        text-align: center;
    }
}

.el-pagination {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>