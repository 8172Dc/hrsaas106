import router from '@/router'
import store from '@/store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // 引入进度
import 'nprogress/nprogress.css' // 引入进度条样式
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/404'] // 定义白名单
router.beforeEach(async(to, from, next) => {
  NProgress.start()// 开启进度条
  if (store.getters.token) {
    // 如果有token
    if (to.path === '/login') {
      // 如果要访问的是登录页
      next('/')// 跳到主页
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token的情况下
    if (whiteList.indexOf(to.path) > -1) {
      // 表示要去的地址在白名单
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()// 解决手动切换地址时 进度条不关闭的问题
})
// 后置守卫
router.afterEach(() => {
  NProgress.done()// 关闭进度条
})
