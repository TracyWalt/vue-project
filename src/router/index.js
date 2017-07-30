import Vue from 'vue'
import Router from 'vue-router'

// 页面框架
import layout from '@/components/layout'

// 各种模块页面
import login from '@/components/login'
import form from '@/components/form'
import table from '@/components/table'
import setting from '@/components/setting'
import wellcom from '@/components/wellcom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '后台管理系统',
      component: layout,
      children: [
        {path: '/form', component: form},
        {path: '/table', component: table},
        {path: '/setting', component: setting},
        {path: '/wellcom', component: wellcom}
      ]
    },
    {
      path: '/login',
      name: '登陆',
      component: login
    }
  ]
})
