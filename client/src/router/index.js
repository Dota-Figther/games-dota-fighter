import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Character from '../views/ChooseChar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
<<<<<<< HEAD
  }
  // {
  //   path: '/character',
  //   name: 'character',
  //   component: Character
  // }
=======
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue')
  }
>>>>>>> b6864f8bfa09368765b1b0faa1164a942752f9e9
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
