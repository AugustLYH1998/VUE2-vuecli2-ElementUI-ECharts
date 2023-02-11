<template>
    <div class='attend'>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学生姓名">
                <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="find">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格 -->
        <el-table :data="table" border style="width: 100%">
            <el-table-column prop="name" label="姓名" align='center'></el-table-column>
            <el-table-column prop="class" label="班级" align='center'></el-table-column>
            <el-table-column prop="actual" label="实到课" align='center'></el-table-column>
            <el-table-column prop="toBeDue" label="应到课" align='center'></el-table-column>
        </el-table>
        <!-- 分页 -->
        <Page :ParentTotal="total"></Page>
    </div>
</template>

<script>
import { getData } from '../../api/api'
import Page from '../commons/Page.vue'
export default {
    name: 'attend',
    created() {
        getData(this, this.url)
    },
    computed: {
        table() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    components: {
        Page
    },
    data() {
        return {
            formInline: {
                name: ''
            },
            tableData: [],
            // 分页数据
            total: 0, // 总条数
            url: '/attend',
            pageSize: 10,
            currentPage: 1
        }
    },
    methods: {
        find() {
            getData(this, this.url, { name: this.formInline.name })
        },
        reset() {
            getData(this, this.url)
            this.currentPage = 1
            this.formInline = {}
        }
    }
}
</script>

<style lang="scss" >
.attend {
    margin-top: 20px;
    .demo-form-inline {
        text-align: left;
    }
}
</style>