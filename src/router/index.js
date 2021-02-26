import Vue from 'vue'
import VueRouter from 'vue-router'
import Galleries from '../views/Galleries.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/galleries',
    name: 'Galleries',
    component: Galleries
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    
  },
]

const router = new VueRouter({
  routes
})

export default router
