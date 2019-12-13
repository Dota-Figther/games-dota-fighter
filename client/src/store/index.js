import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'
import firebase from '../config/firebase'
import router from '../router'

const FieldValue = firebase.firestore.FieldValue

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
        player1: {
          username: player,
          attack: 0,
          defense: 0,
          hero: '',
          health: 0,
          skill: 0
        },
        count: 1
      }
      db.collection('dotaFighter').doc(payload.room).set(data)
        .then(function () {
          dispatch('getRoomData')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      router.push(`/lobby/${payload.room}`)
    },
    joinRoom ({ state, commit }, payload) {
      let count
      db.collection('dotaFighter').doc(payload.room).get()
        .then(result => {
          count = Number(result.data().count)
          count++
          if (count === 2) {
            return db.collection('dotaFighter').doc(payload.room).update({
              [`player${count}`]: {
                username: payload.user,
                attack: 0,
                defense: 0,
                hero: '',
                health: 0,
                skill: 0
              },
              count
            })
          } else {
            throw new Error({
              message: 'Room Penuh'
            })
          }
        })
        .then(result => {
          console.log('success add member')
          router.push(`/lobby/${payload.room}`)
        })
        .catch(err => {
          console.log('gagal add member')
          console.log(err)
        })
    },
    removePlayer ({ state, dispatch }, payload) {
      db.collection('dotaFighter').doc(payload.room).get()
        .then(function (doc) {
          let data = doc.data()
          for (let field in data) {
            if (data[field].username !== undefined) {
              if (data[field].username === payload.user) {
                let newCount = Number(data['count'])
                newCount--
                return db.collection('dotaFighter').doc(payload.room).update({
                  [`${field}`]: FieldValue.delete(),
                  count: newCount
                })
              }
            }
          }
        })
        .then(result => {
          console.log('berhasil hapus')
          dispatch('getRoomData')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
