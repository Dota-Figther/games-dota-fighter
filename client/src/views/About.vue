<template>
  <div class="about">
    <input type="text" name="username" id="username" placeholder="Input Your Name" v-model="username">
    <button class="btn btn-primary" @click.prevent="getData">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      username: ''
    }
  },
  components: {
  },
  methods: {
    getData () {
      localStorage.setItem('user', this.username)
      this.$router.push('/lobby')
    }
  }
}
</script>

<style>

</style>
