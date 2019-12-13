<template>
  <div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ room.id }}</h6>
        <button class="btn btn-primary" @click.prevent="joinRoom(room.id)">Join</button>
        <ul>
          <li>
            {{ room }}
          </li>
        </ul>
        <button class="btn btn-success" v-if="room.count == 2">Start Game</button>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['room'],
  methods: {
    joinRoom (room) {
      let payload = {
        user: localStorage.getItem('user'),
        room
      }
      this.$store.dispatch('joinRoom', payload)
    }
  }

}
</script>

<style>

</style>
