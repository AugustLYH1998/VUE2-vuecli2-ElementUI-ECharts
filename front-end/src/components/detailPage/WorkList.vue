<template>

    <div class="worklist">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="作业名称">
                <el-input v-model="formInline.jobName" placeholder="请输入作业名称查询"></el-input>
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
            <el-table-column prop="jobName" label="作业名称" align='center'></el-table-column>
            <el-table-column prop="completedNumber" label="完成人数" align='center'></el-table-column>
            <el-table-column prop="uncompletedNumber" label="未完成人数" align='center'></el-table-column>
            <el-table-column prop="completion" label="完成率" align='center'></el-table-column>
            <el-table-column prop="check" label="待批改" align='center'></el-table-column>
            <el-table-column prop="checkRate" label="批改率" align='center'></el-table-column>
            <el-table-column prop="passNumber" label="及格人数" align='center'></el-table-column>
            <el-table-column prop="goodNumber" label="优秀人数" align='center'></el-table-column>
        </el-table>
        <!-- 前端分页 -->
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="pageSize"
            layout=" sizes, prev, pager, next,  total , jumper" :total="total">
        </el-pagination>
    </div>
</template>

<script>
import { getData } from '../../api/api'
export default {
    name: 'WorkList',
    created() {
        getData(this, this.url, {})
    },
    computed: {
        table() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    data() {
        return {
            formInline: {
                jobName: ''
            },
            tableData: [],
            url: '/work',
            // 分页
            currentPage: 1,// 当前页数
            total: 0, //总条数
            pageSize: 10// 每页显示条数 
        }
    },
    methods: {
        // 查找
        find() {
            getData(this, this.url, { jobName: this.formInline.jobName })
        },
        // 重置
        reset() {
            this.formInline = {}
            getData(this, this.url, {})
        },
        // 分页
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
        },
        handleCurrentChange(val) {
            this.currentPage = val
        }
    },
}
</script>

<style lang='scss'>
.worklist {
    margin-top: 20px;

    .demo-form-inline,
    .el-form-item {
        text-align: left;
    }
}
</style>
