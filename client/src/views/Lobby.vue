<template>
<div class="bg-img">
  <div v-if="this.$route.path === '/lobby'" class="d-flex flex-column align-items-center">
    <div class="d-flex mt-5">
      <input type="text" placeholder="room name" id="room-name" v-model="roomName" class="mx-2">
      <button class="btn btn-primary" @click.prevent="createRoom">Create Room</button>
    </div>
    <div class="container d-flex flex-wrap justify-content-start">
      <cardroom v-for="(data, index) in listRoom" :key="index" :room="data"></cardroom>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>

import cardroom from '../components/CardRoom'

export default {
  name: 'lobby',
  data () {
    return {
      roomName: ''
    }
  },
  components: {
    cardroom
  },
  methods: {
    getData () {
      this.$store.dispatch('getRoomData')
    },
    createRoom () {
      let payload = {
        user: localStorage.getItem('user'),
        room: this.roomName
      }
      this.$store.dispatch('createRoom', payload)
    }
  },
  created () {
    this.getData()
  },
  computed: {
    listRoom () {
      return this.$store.state.listRoom
    }
  }
}
</script>

<style scoped>
.bg-img {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://i.pinimg.com/originals/d2/9e/2c/d29e2c4b182642f4f65611cf7ecaa7e0.jpg");
}
</style>
