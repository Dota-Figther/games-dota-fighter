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
    path: '/lobby',
    name: 'lobby',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lobby.vue'),
    children: [
      {
        path: ':room',
        name: 'room',
        component: () => import(/* webpackChunkName: "room" */ '../views/ChooseChar.vue'),
        children: [
          {
            path: 'fight',
            name: 'fight',
            component: () =>
              import(/* webpackChunkName: "about" */ '../views/FightPage.vue')
          }
        ]
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
