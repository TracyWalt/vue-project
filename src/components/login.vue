<template>
  <el-form class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="userinfo.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="userinfo.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox checked class="remember">记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      userinfo: {
        username: 'test_admin',
        password: '123456'
      }
    }
  },
  methods: {
    handleSubmit () {
      if (this.userinfo.username !== '' && this.userinfo.password !== '') {
        sessionStorage.setItem('user', JSON.stringify(this.userinfo))
        let _redirect = this.$route.query.redirect
        if (_redirect) {
          this.$router.push({path: '/' + _redirect})
        } else {
          this.$router.push({path: '/wellcom'})
        }
      }
    }
  }
}
</script>
