import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./App.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('./components/AboutUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router