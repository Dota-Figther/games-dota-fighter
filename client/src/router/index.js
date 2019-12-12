import Vue from "vue";
import VueRouter from "vue-router";
// import Character from '../views/ChooseChar.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/fight",
    name: "fight",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FightPage.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/lobby",
    name: "lobby",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lobby.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
