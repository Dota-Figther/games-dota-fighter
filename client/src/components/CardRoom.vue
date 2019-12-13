<template>
  <div id="card" class="mt-5">
    <div class="card mx-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Room Name : {{ room.id }}</h5>
        <button class="btn btn-primary" @click.prevent="joinRoom(room.id)">Join</button>
        <h6 class="card-subtitle mt-2 text-muted">member list :</h6>
        <ol class="mt-2">
          <div v-for="(data,index) in room" :key="index">
            <li v-if="room[index].username">
            {{ room[index].username }}
            </li>
          </div>
        </ol>
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

<style scoped>
#card {
  box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

#card:hover {
  box-shadow: 0 20px 16px 0 rgba(0,0,0,0.2);
}
</style>
