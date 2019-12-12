<template>
<div>
  <input type="text" placeholder="room name" id="room-name" v-model="roomName">
  <button class="btn btn-primary" @click.prevent="createRoom">Create Room</button>
  <div class="d-flex flex-wrap mx-2">
  <cardroom v-for="(data, index) in listRoom" :key="index" :room="data"></cardroom>
  </div>
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

<style>

</style>
