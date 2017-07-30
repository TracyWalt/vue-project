<template>

  <el-row class="container">

    <!-- header -->
    <el-col class="header" :span="24">
        <span class="title">后台管理系统</span>
        <el-dropdown class="userinfo" trigger="hover" @command="menuLink">
          <span class="el-dropdown-link">
            {{userinfo.username}} <img src="https://img3.banggood.com/thumb/grid/oaupload/banggood/images/D6/B6/2e250f15-a711-4470-8c81-ef1809b67ca5.jpg" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/wellcom">欢迎页</el-dropdown-item>
            <el-dropdown-item command="/setting">系统设置</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-col>
    <!-- //header -->

    <!-- main -->
    <el-col class="main" :span="24">
      <aside>

        <el-menu :default-active="$route.path" unique-opened router class="el-menu-vertical-demo" >
          <el-submenu index="/form">
            <template slot="title"><i class="el-icon-message"></i>通用组件</template>
            <el-menu-item index="/form">Form</el-menu-item>
            <el-menu-item index="/table">Table</el-menu-item>
          </el-submenu>
          <el-menu-item index="/setting"><i class="el-icon-menu"></i>系统设置</el-menu-item>
        </el-menu>

      </aside>
      <section class="content-container">
        <el-breadcrumb :class="$route.name ? 'navpath' : 'navpath onepath'" :separator="'/'">
          <el-breadcrumb-item v-for="item in $route.matched" :to="{path: item.path || '/wellcom'}" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>

      </section>
    </el-col>
    <!-- //main -->

    <!-- footer -->
    <el-col class="footer" :span="24">
        Copyright © 2006-2017 Banggood Ltd. All Rights Reserved.
    </el-col>
    <!-- //footer -->

  </el-row>

</template>

<script>
export default {
  data () {
    return {
      userinfo: {}
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      this.userinfo = JSON.parse(sessionStorage.getItem('user'))
    },
    // 退出登陆
    loginOut () {
      this.$confirm('是否真要退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('user')
        this.$router.push({path: '/login'})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    menuLink (command) {
      if (command) {
        this.$router.push({path: command})
      }
    }
  }
}
</script>
