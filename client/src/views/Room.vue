<template>
<div>
    <h1>Ini adalah room {{getPath}} </h1>
</div>
</template>

<script>
export default {
  computed: {
    getPath () {
      return this.$router.path
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('masuk sini')
    let path = this.$route.params.room
    console.log(path)
    let payload = {
      room: path,
      user: localStorage.getItem('user')
    }
    this.$store.dispatch('removePlayer', payload)
    next()
  }
}
</script>

<style>

</style>
