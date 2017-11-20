import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/readme',
    component: () => import('@/components/common/Home'),
    children: [{
      path: '/',
      component: () => import('@/components/other/readme')
    },
    {
      path: '/client',
      component: () => import('@/components/userManager/client')
    },
    {
      path: '/person',
      component: () => import('@/components/userManager/person')
    },
    {
      path: '/character',
      component: () => import('@/components/userManager/character')
    },
    {
      path: '/order',
      component: () => import('@/components/orderManager/order')
    },
    {
      path: '/fare',
      component: () => import('@/components/flightManager/fare')
    },
    {
      path: '/message',
      component: () => import('@/components/flightManager/message')
    }]
  },
  {
    path: '/index',
    component: () => import('@/components/index'),
    props: (route) => ({ type: route.query.islogin })
  }]
})
