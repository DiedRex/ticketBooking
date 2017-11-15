import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/components/index')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index/1'
  },
  {
    path: '/readme',
    component: () => import('@/components/common/Home'),
    children: [{
      path: '/',
      component: index
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
    component: () => import('@/components/other/login'),
    props: (route) => ({ type: route.query.islogin })
  }]
})
