import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../config/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listRoom: []
  },
  mutations: {
  },
  actions: {
    getRoomData ({ state, commit }) {
      db.collection('dotaFigther').onSnapShot(function (querySnapshot) {
        let rooms = []
        querySnapshot.forEach(function (doc) {
          let obj = {
            id: doc.id,
            ...doc.data()
          }
          rooms.push(obj)
        })
        console.log(rooms)
        state.listRoom = rooms
      })
    }
  },
  modules: {
  }
})
