import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist 没有重定向白名单

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  // 设置页面的标题      
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in     
  //确定用户是否已经登录
  const hasToken = getToken()
    console.log(hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // 假如登陆，重定向到主页
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      console.log(hasGetUserInfo)
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info     
          // 拿到个人信息
          await store.dispatch('user/getInfo')
          console.log(store.dispatch('user/getInfo'))
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          // 删除 token 将转回登录页重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
        // 设置路由白名单，不需要token也能进入的页面    
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // 其他没有访问权限的页面将被重定向到登录与页面  
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar 
  NProgress.done()
})
