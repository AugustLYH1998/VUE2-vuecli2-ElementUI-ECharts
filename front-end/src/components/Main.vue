<template>
    <div>
        <el-container class="content">
            <el-header>
                <Header></Header>
            </el-header>

            <el-container>
                <Menu></Menu>
                <el-main>
                    <!-- 添加面包屑 -->
                    <el-card>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页登录界面</el-breadcrumb-item> -->
                            <el-breadcrumb-item v-for="(item, index) in this.$route.matched" :key=index
                                :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-card>

                    <router-view></router-view>
                </el-main>
            </el-container>

            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>

    </div>
</template>

<script>
import Footer from './commons/Footer.vue'
import Header from './commons/Header.vue'
import Menu from './commons/Menu.vue'
export default {
    data() {
        return {
        }
    },
    created() {
    },

    components: {
        Footer,
        Header,
        Menu
    }

}
</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;

    .el-aside {
        margin-left: 20px;
    }
}
</style>