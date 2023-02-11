<template>
    <div class="header">
        <el-header>
            <div class='title'>后台管理系统</div>
            <div class="logout">
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#2578b5" text-color="#fff">
                    <el-submenu index=1>
                        <template slot="title">{{ username }}</template>
                        <el-menu-item index="1-1" style="text-align:center ;">
                            <a href="/" @click="logout">退出登录</a>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </el-header>
    </div>
</template>
<script>
export default {

    data() {
        return {
            username: ''
        }
    },

    created() {
        // 取出存入本地的登录用户名
        this.username = localStorage.getItem('username')
    },

    methods: {

        logout() {
            localStorage.removeItem('username')
        }
    },

}
</script>
<style lang="scss">
.header {
    .el-header {
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;

        .title {
            width: 200px;
            font-size: 24px;
        }
    }


}
</style>
