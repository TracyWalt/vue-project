// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/scss/style.scss'

Vue.use(Element)

Vue.config.productionTip = false

// 判断是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    console.log(to)
    next({path: '/login', query: {redirect: to.path.substring(1)}})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
