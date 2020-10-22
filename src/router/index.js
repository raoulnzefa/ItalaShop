import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/products-details',
    name: 'ProductsDetails',
    component: () => import('../views/ProductsDetails.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authenticated = to.matched.some(record => record.meta.requireAuth)
  
  if(authenticated && store.state.token === null){
    next({name:'Login'})
  }else{
    next()
  }
})

export default router
