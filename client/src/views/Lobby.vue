<template>
<div>
  <input type="text" placeholder="room name" id="room-name" v-name="">
  <button class="btn btn-primary">Create Room</button>
  <cardroom v-for="(data,index) in listRoom" :key="index" :room="data"></cardroom>
</div>
</template>

<script>

import cardroom from '../components/CardRoom'

export default {
  name: 'lobby',
  data () {
    return {
      listRoom: []
    }
  },
  components: {
    cardroom
  },
  methods: {
    getData () {
      this.$store.dispatch('getRoomData')
    }
  },
  created () {
    this.getData()
    this.listRoom = this.$store.state.listRoom
  }
}
</script>

<style>

</style>
