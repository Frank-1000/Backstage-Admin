import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed    
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/role',
    name: 'Dashboard',
    meta: { title: '角色管理', icon: 'el-icon-user-solid' },
    children: [{
      path: '/dashboard/role',
      name: 'Role',
      component: () => import('@/views/dashboard/roleCreation/index'),
      meta: { title: '角色创建' }
    },
    {
      path: 'set',
      name: 'Set',
      component: () => import('@/views/dashboard/purviewSet/index'),
      meta: { title: '权限设置' }
    }]
  },
  {
    path: '/broker',
    component: Layout,
    redirect: '/broker/management',
    name: 'Broker',
    meta: { title: '经纪人', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'management',
        name: 'Management',
        component: () => import('@/views/broker/BrokerManagement/index'),
        meta: { title: '经纪人管理'}
      },
      {
        path: '/broker/customer',
        name: 'Customer',
        component: () => import('@/views/broker/OfflineCustomer/index'),
        meta: { title: '下线客户'}
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/binding',
    name: 'Admin',
    meta: { title: '客户管理', icon: 'el-icon-user'},
    children: [
      {
        path: 'adminter',
        name: 'adminter',
        component: () => import('@/views/admin/index'),
        meta: { title: '客户查询'}
      },
      {
        path: 'binding',
        name: 'Binding',
        component: () => import('@/views/binding/index'),
        meta: { title: '绑定API' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '持仓订单', icon: 'el-icon-document-copy' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '仓位汇总' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '持仓详情' }
      }
    ]
  },
  {
    path: '/abnormal',
    component: Layout,
    redirect: '/abnormal/orders',
    name: 'Abnormal',
    meta: { title: '异常订单', icon: 'el-icon-document-delete' },
    children: [
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/abnormal/orders/index'),
        meta: { title: '订单异常' }
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/abnormal/account/index'),
        meta: { title: '账号异常'}
      }
    ]
  },
  {
    path: '/entrust',
    component: Layout,
    redirect: '/entrust/now',
    name: 'Entrust',
    meta: { title: '委托订单', icon: 'el-icon-edit-outline' },
    children: [
      {
        path: 'now',
        name: 'Now',
        component: () => import('@/views/entrust/now/index'),
        meta: { title: '当前委托' }
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('@/views/entrust/history/index'),
        meta: { title: '历史委托'}
      }
    ]
  },
  {
    path: '/transfer',
    component: Layout,
    redirect: '/transfer/operator',
    name: 'Operator',
    meta: { title: '划转记录', icon: 'el-icon-sort' },
    children: [
      {
        path: 'operator',
        name: 'Operator',
        component: () => import('@/views/transferRecord/operator/index'),
        meta: { title: '操作员兑换记录' }
      },
      {
        path: 'client',
        name: 'Client',
        component: () => import('@/views/transferRecord/client/index'),
        meta: { title: '客户账户记录'}
      }
    ]
  },
  {
    path: '/record',
    component: Layout,
    redirect: '/record/operator',
    name: 'Operator',
    meta: { title: '兑换记录', icon: 'el-icon-s-unfold'},
    children: [
      {
        path: 'operator',  
        name: 'Operator',
        component: () => import('@/views/ForRecord/operator/index'),
        meta: { title: '操作员兑换记录' }
      },
      {
        path: 'client',
        name: 'Client',
        component: () => import('@/views/ForRecord/client/index'),
        meta: { title: '客户账户记录'}
      }
    ]
  },

  // {
  //   path: '/menu3',
  //   component: Layout,
  //   redirect: '/menu3/menu31',
  //   name: 'Menu31',
  //   meta: { title: '交易记录', icon: 'el-icon-edit-outline' },
  //   children: [
  //     {
  //       path: 'menu31',
  //       name: 'Menu31',
  //       component: () => import('@/views/menu31/index'),
  //       meta: { title: '当前委托' }
  //     },
  //     {
  //       path: 'menu3-2',
  //       name: 'Menu2-2',
  //       component: () => import('@/views/nested/menu3/menu3-3'),
  //       meta: { title: '历史委托' }
  //     },
  //     {
  //       path: 'financile',
  //       name: 'Financile',
  //       component: () => import('@/views/financial/index'),
  //       meta: { title: '财务记录详情' }
  //     }
  //   ]
  // },
  {
    path: '/inquire',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Inquire',
        component: () => import('@/views/inquire/index'),
        meta: { title: '查询', icon: 'el-icon-search' }
      }
    ]
  },
  {
    path: '/statement',
    component: Layout,
    redirect: '/statement/statementList',
    name: 'Statement',
    meta: { title: '报表', icon: 'el-icon-pie-chart' },
    children: [
      {
        path: 'statementList',
        name: 'StatementList',
        component: () => import('@/views/statement/statementList/index'),
        meta: { title: '报表明细'}
      },
      {
        path: 'fund',
        name: 'Fund',
        component: () => import('@/views/statement/fund/index'),
        meta: { title: '账户资金'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support       
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
