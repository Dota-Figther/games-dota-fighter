<template>
  <div class="bg-img font-dota d-flex align-items-end">
    <div class="container">
      <div class="form-group d-flex flex-column align-items-center">
        <div class style="width:300px">
          <input
            type="text"
            style="background-color: transparent;border:2px solid #940A01;color:white;text-align:center"
            class="form-control"
            placeholder="Username"
            id="username"
            v-model="username"
          />
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-light mb-5 mt-3" @click.prevent="getData">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    getData () {
      localStorage.setItem('user', this.username)
      this.$router.push('/lobby')
    }
  }
}
</script>

<style scoped>
.font-dota {
  font-family: trajan-pro-3, serif;
  font-style: normal;

  font-weight: 200;
}
.bg-img {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images2.alphacoders.com/474/thumb-1920-474206.jpg");
}
</style>
