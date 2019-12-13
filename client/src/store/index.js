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
        hero: 'Morphling',
        health: 10000,
        basicAttack: 1000,
        skillAttack: 1300,
        manaCost: 300,
        image: 'http://3.bp.blogspot.com/-SymozL1P660/VA_8s5UAIxI/AAAAAAAAAj0/92lS3IZqIGI/s1600/screenshot000.png',
        thumbnail: 'http://www.beritadota.com/wp-content/uploads/2018/03/Morphling-Di-Dota-2-e1520709954437.jpg'
      },
      {
        hero: 'Earth Spirit',
        health: 12000,
        basicAttack: 900,
        skillAttack: 1000,
        manaCost: 200,
        image: 'https://i2.wp.com/www.gamezo.co.uk/wp-content/uploads/2019/11/s3.png?resize=925%2C1024&ssl=1(225 kB)',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/252594374659225792/5A603C1E31889467BBC8EF3265BEFBC6D71044A5/'
      },
      {
        hero: 'Ember Spirit',
        health: 10000,
        basicAttack: 1100,
        skillAttack: 1200,
        manaCost: 300,
        image: 'http://cdn.dota2.com/apps/dota2/images/international2019/immortals/b_ember_spirit.png?v=5301029',
        thumbnail: 'https://pages.firstblood.io/pages/wp-content/uploads/2019/01/ember-spirit-hero-guide-970x570.jpg'
      },
      {
        hero: 'Invoker',
        health: 11000,
        basicAttack: 800,
        skillAttack: 1300,
        manaCost: 500,
        image: 'https://vignette.wikia.nocookie.net/vsbattles/images/8/81/Base_invoker.png/revision/latest?cb=20181005164159(465 kB)',
        thumbnail: 'https://www.revivaltv.id/wp-content/uploads/2016/10/g3.jpg'
      },
      {
        hero: 'Faceless Void',
        health: 10000,
        basicAttack: 900,
        skillAttack: 1250,
        manaCost: 400,
        image: 'https://vignette.wikia.nocookie.net/vsbattles/images/4/4d/Base_void.png/revision/latest?cb=20181030133451(435 kB)',
        thumbnail: 'https://g2cgame.com/static/information/152502257492204680035756988650994015.png'
      }
    ],
    playerName: '',
    roomName: '',
    member: [],
    currentRoom: {}
  },
  mutations: {
    SET_LIST_ROOM (state, payload) {
      state.listRoom = payload
    },
    SET_PLAYER_NAME (state, payload) {
      state.playerName = payload
    },
    SET_ROOM_NAME (state, payload) {
      state.roomName = payload
    },
    SET_MEMBER_ROOM (state, payload) {
      state.member = payload
    },
    SET_ROOM_SITUATION (state, payload) { // baru
      console.log('masuk mutation')
      state.currentRoom = payload
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
          hero: '',
          health: 0,
          basicAttack: 0,
          skillAttack: 0,
          manaCost: 0,
          image: '',
          thumbnail: '',
          username: player
        },
        count: 1
      }
      db.collection('dotaFighter').doc(payload.room).set(data)
        .then(function () {
          commit('SET_PLAYER_NAME', player)
          commit('SET_ROOM_NAME', payload.room)
          localStorage.setItem('member', 'player1')
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
                hero: '',
                health: 0,
                basicAttack: 0,
                skillAttack: 0,
                manaCost: 0,
                image: '',
                thumbnail: ''
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
          localStorage.setItem('member', 'player2')
          router.push(`/lobby/${payload.room}`)
        })
        .catch(err => {
          console.log('gagal add member')
          console.log(err)
        })
    },
    removePlayer ({ state, dispatch }, payload) {
      db.collection('dotaFig// this.$hter').doc(payload.room).get()
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
    },
    chooseHero ({ state, dispatch }, payload) {
      db.collection('dotaFighter').get()
        .then(user => {
          return db.collection('dotaFighter')
            .doc(payload.room)
            .update({
              [`${payload.member}`]: {
                username: payload.username,
                mana: 1000,
                ...state.heroList[payload.hero]
              }
            })
        })
        .then(hero => {
          dispatch('roomSituation', { room: payload.room })
        })
        .catch(console.log)
    },
    attackEnemy ({ state, commit }, payload) {
      db.collection('dotaFighter').doc(payload.room).get()
        .then(result => {
          let playerList = result.data()
          let enemyData = playerList[payload.enemy]
          let newHealth = Number(enemyData.health) - Number(payload.damage)
          let obj = {}
          obj[payload.enemy] = {
            username: enemyData.user,
            attack: enemyData.attack,
            mana: enemyData.mana,
            manaCost: enemyData.manaCost,
            hero: enemyData.hero,
            health: newHealth,
            skill: enemyData.skill
          }
          return db.collection('dotaFighter').doc(payload.room)
            .update({
              [payload.enemy]: obj
            })
        })
        .then(result => {

        })
    },
    roomSituation ({ state, commit }, payload) {
      db.collection('dotaFighter').doc(payload.room)
        .onSnapshot(function (querySnapshot) {
          console.log(querySnapshot.data())
          commit('SET_ROOM_SITUATION', querySnapshot.data())
        })
    },
    chargeEnergy ({ state, commit }, payload) {
      db.collection('dotaFighter').doc(payload.room).get()
        .then(result => {
          let playerList = result.data()
          let currentData = playerList[payload.current]
          let newMana = Number(currentData.mana) + Number(payload.manaCost)
          let obj = {}
          obj[payload.current] = {
            username: currentData.user,
            attack: currentData.attack,
            mana: newMana,
            manaCost: currentData.manaCost,
            hero: currentData.hero,
            health: currentData.mana,
            skill: currentData.skill
          }
          return db.collection('dotaFighter').doc(payload.room)
            .update({
              [payload.current]: obj
            })
        })
        .then(result => {

        })
    }
  },
  modules: {
  }
})
