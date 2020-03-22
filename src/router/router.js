import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import download from '../pages/download'
import merchant from '../pages/merchant'
import product from '../pages/product'
import service from '../pages/service'
import about from '../pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path:'/',
        component: index,
    },
    {
        path:'/download',
        component: download
    },
    {
        path:'/merchant',
        component: merchant
    },
    {
      path:'/product',
      component: product
    },
    {
      path:'/service',
      component: service
    },
    {
      path:'/about',
      component: about
    },
    
  ],
})