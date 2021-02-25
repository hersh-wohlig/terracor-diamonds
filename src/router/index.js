import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Stone-count',
    component: () => import( '../views/Stone-count.vue')
  },
  {
    path: '/clarity-map',
    name: 'Clarity-map',
    component: () => import( '../views/Clarity-map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
