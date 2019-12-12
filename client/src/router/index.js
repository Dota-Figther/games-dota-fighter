import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/fight',
    name: 'fight',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FightPage.vue')
  },
  {
    path: '/',
    name: 'homepage',
    component: () =>
      import(/* webpackChunkName: "homepage" */ '../views/HomePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
