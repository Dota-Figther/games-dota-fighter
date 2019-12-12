import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listRoom: [],
    heroList: [
      {
        name: 'morphling',
        health: 10000,
        basicAttack: 1000,
        skillAttack: 1300,
        defense: 2000,
        image: '',
        thumbnail: ''
      },
      {
        name: 'earth spirit',
        health: 12000,
        basicAttack: 900,
        skillAttack: 1000,
        defense: 1500,
        image: '',
        thumbnail: ''
      },
      {
        name: 'ember spirit',
        health: 10000,
        basicAttack: 1100,
        skillAttack: 1200,
        defense: 1300,
        image: '',
        thumbnail: ''
      },
      {
        name: 'invoker',
        health: 11000,
        basicAttack: 800,
        skillAttack: 1300,
        defense: 1400,
        image: '',
        thumbnail: ''
      }
    ]
  },
  mutations: {
    SET_LIST_ROOM (state, payload) {
      state.listRoom = payload
    }
  },
  actions: {
    getRoomData ({ state, commit }) {
      db.collection('dotaFighter').onSnapshot(function (querySnapshot) {
        let rooms = []
        querySnapshot.forEach(function (doc) {
          let obj = {
            id: doc.id,
            ...doc.data()
          }
          rooms.push(obj)
        })
        commit('SET_LIST_ROOM', rooms)
      })
    },
    createRoom ({ commit, dispatch }, payload) {
      let player = payload.user
      let data = {
        username: player,
        attack: 0,
        defense: 0,
        hero: '',
        health: 0,
        skill: 0
      }
      db.collection('dotaFighter').doc(payload.room).add(data)
        .then(function () {
          console.log('Document successfully written!')
          dispatch('getRoomData')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  },
  modules: {
  }
})
