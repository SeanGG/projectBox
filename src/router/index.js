import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

// 加载盒子项目目录
import box from '@/page/box/route.js'

const routes = [
  // 默认加载页面
  {
    path: '/',
    redirect: '/message'
  },
  // 首页
  {
    path: '/Index',
    name: 'Index',
    component: r => require.ensure([], () => r(require('@/page/index/index.js')), 'index'),
    meta: {
      title: '入口聚合页面'
    }
  },
  // 404
  {
    path: '/404',
    name: '404',
    component: r => require.ensure([], () => r(require('@/page/404/index.js')), '404'),
    meta: {
      title: '星云应用-404'
    }
  },
  // 未知页面重定向
  {
    path: '*',
    redirect: '/404'
  }
].concat(
  box,
)

// const router = new Router({
export default new Router({
  mode: 'hash',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
