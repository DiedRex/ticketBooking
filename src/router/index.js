import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/readme',
    component: () => import('@/components/common/Home'),
    children: [{
      path: '/',
      redirect: '/client'
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
    path: '/login',
    component: () => import('@/components/other/login')
  },
  {
    path: '/register',
    component: () => import('@/components/other/register')
  }]
})
