<template>
  <div>
    <div v-show="$route.path == `/lobby/${roomName}`">
      <div class="choose">
      <h1 style="color: white">Choose Your Hero</h1>
    </div>
    <div class="cards-container d-flex justify-content-center" style="width: 60%">
      <div v-for="(data,index) in getListHero" :key="index" @click.prevent="chooseHero(index)">
        <a class="card">
          <div
            class="side front"
            :style="`background-image:url(${data.thumbnail})`"
          >
            <div class="name">
              <div class="margin-top">
                <span>{{ data.name }}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="d-flex justify-content-between container">
      <div class="d-flex flex-column">
        <img :src="currentRoom.player1.image" alt="gambar" width="300px" height="300px" style="position: absolute; bottom: 100px; left: -70px;">
        <h1 style="color: yellow">{{ currentRoom.player1.username }}</h1>
      </div>
      <div>
        <button class="btn btn-warning" @click.prevent="goFight">Start Battle</button>
      </div>
      <div class="d-flex flex-column">
        <img :src="currentRoom.player2.image" alt="gambar" width="300px" height="300px" style="position: absolute; bottom: 100px; right: -70px;">
        <h1 style="color: yellow">{{ currentRoom.player2.username }}</h1>
      </div>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'room',
  member: [],
  data () {
    return {
      player: '',
      player1: '',
      player2: '',
      roomName: ''
    }
  },
  methods: {
    chooseHero (index) {
      let payload = {
        member: localStorage.getItem('member'),
        hero: index,
        room: this.$route.params.room,
        username: localStorage.getItem('user')
      }
      this.$store.dispatch('chooseHero', payload)
    },
    showHero (img) {
      this[localStorage.getItem('member')] = img
    },
    goFight(){
      this.$router.push('/fight')
    }
  },
  computed: {
    getListHero () {
      return this.$store.state.heroList
    },
    ...mapState(['currentRoom'])
  },
  created () {
    this.roomName = this.$route.params.room
    let room = this.$route.params.room
    this.$store.dispatch('roomSituation', { room })
  },
  mounted () {
    this.member = this.$store.state.member
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: inline-block;
  width: 180px;
  height: calc(1.4 * 180px);
  animation: float 1.3s ease-in-out infinite;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  margin: 10px 5px;
  transition: transform 0.3s ease-out;
  transform: rotateY(0deg);
}
.card .side {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.card .front {
  background-color: #17316a;
  transition: width 0.2s ease-out, height 0.2s ease-out, top 0.2s ease-out,
    left 0.2s ease-out;
}

.name {
  font-size: 20px;
  position: absolute;
  width: 100%;
  height: 15%;
  bottom: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(218, 208, 208);
  transition: 0.3s;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.margin-top {
  margin-top: 10px;
}

.card:hover .margin-top {
  transition: 0.3s;
  font-size: 30px;
  margin-top: 5px;
}

.card:hover {
  animation: none;
  z-index: 100;
}
.card:hover .side.front {
  width: 250px;
  height: calc(1.4 * 250px);
  position: relative;
  top: calc((-1 * (1.4 * 150px) / 2) + ((1.4 * 100px) / 2));
  left: calc((-1 * 150px / 2) + (100px / 2));
}

.container {
  height: 100%;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  text-align: center;
}

.cards-container {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: top;
  padding: 30px 100px;
  filter: drop-shadow(25px 25px 10px grey);
}

.choose {
  text-align: center;
  font-size: 35px;
}

@keyframes float {
  0% {
    top: -10px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: -10px;
  }
}

</style>
