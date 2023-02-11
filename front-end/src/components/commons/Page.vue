<template>
    <!-- 分页组件 -->
    <div class="page">
        <!-- 前端分页 -->
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="[10, 15, 20]" :page-size="pageSize"
            layout=" sizes, prev, pager, next,  total , jumper" :total="ParentTotal">
        </el-pagination>
    </div>
</template>
<script>
export default {
    props: {
        'ParentTotal': Number
    },
    data() {
        return {
            // 分页
            currentPage: 1,// 当前页数
            pageSize: 10// 每页显示条数 
        }
    },
    methods: {
        // 分页
        handleSizeChange(val) {
            this.$parent.pageSize = val
            this.$parent.currentPage = 1
        },
        handleCurrentChange(val) {
            this.$parent.currentPage = val
        }
    }
}
</script>

<style lang="scss">
.page {
    .el-pagination {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>