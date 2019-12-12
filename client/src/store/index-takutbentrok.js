import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroList: [
      {
        name: 'morphling',
        health: 10000,
        basicAttack: 1000,
        skillAttack: 1300,
        image: '',
        thumbnail: ''
      },
      {
        name: 'earth spirit',
        health: 12000,
        basicAttack: 900,
        skillAttack: 1000,
        image: '',
        thumbnail: ''
      },
      {
        name: 'ember spirit',
        health: 10000,
        basicAttack: 1100,
        skillAttack: 1200,
        image: '',
        thumbnail: ''
      },
      {
        name: 'invoker',
        health: 11000,
        basicAttack: 800,
        skillAttack: 1300,
        image: '',
        thumbnail: ''
      }
    ]
  },
  mutations: {

  },
  actions: {
    chooseHero ({ state, commit }, payload) {
      let obj = {}
      obj[payload.user] = state.heroList[payload.hero]
      db.collection('dotaFighter')
        .doc(payload.room)
        .set(obj)
        .then(() => {
          commit('')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
