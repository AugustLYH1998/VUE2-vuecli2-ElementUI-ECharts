import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




const router = new Router({
  routes: [
    {
      path: '/login',
      redirect: '/',
      hidden: true
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
      hidden: true
    },
    {
      path: '/main',
      name: '学生管理',
      component: () => import('@/components/Main.vue'),
      hidden: false,
      iconClass: 'fa fa-user',
      children: [
        {
          name: '学生列表',
          path: '/StudentList',
          component: () => import('@/components/detailPage/StudentList.vue'),
          iconClass: 'fa fa-file'
        }, {
          name: '作业列表',
          path: '/WorkList',
          component: () => import('@/components/detailPage/WorkList.vue'),
          iconClass: 'fa fa-font'
        },
        {
          name: '信息列表',
          path: '/InfoList',
          component: () => import('@/components/detailPage/InfoList.vue'),
          iconClass: 'fa fa-list'
        },
        {
          name: '考勤列表',
          path: '/Attend',
          component: () => import('@/components/detailPage/attend.vue'),
          iconClass: 'fa fa-list'
        }
      ]
    },
    {
      path: '/main',
      name: '数据管理',
      component: () => import('@/components/Main.vue'),
      hidden: false,
      iconClass: 'fa fa-database',
      children: [
        {
          path: '/main/dataOverview',
          name: '数据预览',
          component: () => import('@/components/echartsAnalysis/dataOverwiew.vue'),
          hidden: false,
          iconClass: 'fa fa-asterisk',
        }
      ]

    },
    {
      path: '/*',
      name: 'NotFound',
      component: () => import('@/components/commons/404.vue'),
      hidden: true
    }

  ],
  mode: 'history'
})

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem("username")) next({ name: 'Login' })
  else next()
})

export default router