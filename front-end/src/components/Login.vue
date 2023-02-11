<template>
  <div class="Login">
    <el-card class='box-card'>

      <div slot='header' class="clearfix">
        <span>后台管理系统</span>
      </div>

      <el-form :model="form" ref="form" label-width="50px">

        <!-- 规则rules 丢失焦点时提示输入账号 -->
        <el-form-item label="账号" prop="username" :rules="[
          { required: true, message: '请输入账号！', trigger: 'blur' },
          { min: 4, max: 10, message: '请输入4-10位数字', trigger: 'blur' }
        ]">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password" :rules="[
          { required: true, message: '请输入密码！', trigger: 'blur' },
          { min: 6, max: 12, message: '长度是6-12个字符', trigger: 'blur' }
        ]">
          <!-- 添加切换显示密码图标  -->
          <el-input type="password" v-model="form.password" :show-password="showPassword">
          </el-input>

        </el-form-item>

        <el-form-item>
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="primary" @click="toLogin('form')">登录</el-button>

        </el-form-item>

      </el-form>

    </el-card>

  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      // 是否显示按钮
      showPassword: true
    }
  },
  methods: {
    toLogin(form) {
      // 传入的是字符串对象 所以用[]取form
      this.$refs[form].validate((vaild) => {
        if (vaild) {
          delete this.form.apiID;
          // this.axios.post('http://localhost:8888/login', this.form).then(res => {
          this.service.get('/login').then(res => {
            // 判断状态码
            if (res.status === 200 || res.status === 201) {
              res.data.forEach(element => {
                // console.log(this.form.username);
                // console.log(element.username);
                if (this.form.username == element.username && this.form.password == element.password) {
                  // 用户名存入本地
                  localStorage.setItem("username", this.form.username);
                  // 登录成功提示消息
                  this.$message({
                    showClose: true,
                    message: '登陆成功，管理员：' + this.form.username,
                    type: 'success',
                    center: true
                  });
                  this.$router.push('/main')
                } else {
                  this.$message({
                    showClose: true,
                    message: '账号密码错误!请再次尝试',
                    type: 'wran',
                    center: true
                  });
                }
              });
            }

          }).catch(err => console.log(err))
        } else {
          console.log('error');
        }
      });
    },
    // 重置按钮
    resetForm() {
      this.form.password = ''
      this.form.username = ''
    },
  }
}
</script>

<style scoped lang="scss">
.Login {
  background: #409EFF;
  width: 100%;
  height: 100%;
  position: absolute;

  .box-card {
    width: 450px;
    margin: 200px auto;

    .el-card__header {
      font-size: 34px;
    }

    .el-input {
      width: 300px;
      float: left;
    }


    .el-button {
      width: 70px;
      float: right;
      margin: 0 10px 0 10px;
    }
  }
}
</style>
