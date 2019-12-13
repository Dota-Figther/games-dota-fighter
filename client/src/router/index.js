import Vue from 'vue'
import VueRouter from 'vue-router'
// import Character from '../views/ChooseChar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
  },
  {
    path: '/fight',
    name: 'fight',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FightPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue'),
    children: [
      {
        path: ':room',
        name: 'room',
        component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue'),
        beforeLeave: (to, from, next) => {
          this.$store.dispatch('leaveRoom')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
