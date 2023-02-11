<template>
    <div>
        <el-aside>
            <el-menu router :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen"
                @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

                <template v-for="(item, index) in menus">
                    <el-submenu :index="index + ''" :key=index v-if="!item.hidden">
                        <template slot="title" >
                            <!-- <i class="fa fa-user"></i> -->
                            <div class="box">
                                <i :class="item.iconClass"></i>
                                <span>{{ item.name }}</span>
                            </div>
                        </template>

                        <el-menu-item v-for="(child, index) in item.children" :key=index :index='child.path'>
                            <!-- <i class="fa fa-list"></i> -->
                            <i :class="child.iconClass"></i>
                            <span>{{ child.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>

            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menus: [],
            activePath: ''
        }
    }
    , methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    },
    created() {
        // console.log(this.$router.options.routes);
        this.menus = this.$router.options.routes
        // console.log(this.menus);
        // console.log(this.$router.currentRoute.path);
        this.activePath = this.$router.currentRoute.path
    }
}
</script>

<style lang="scss" scoped>
.box {
    i ,span{
        font-size: 18px;
        font-weight: bolder;
    }
}

.el-aside {
    height: 100%;
    margin-left: 20px;

    .el-menu {
        height: 100%;
    }
}

.el-submenu {
    min-width: 0;
}
</style>