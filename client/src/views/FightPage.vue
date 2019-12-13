<template>
  <div class="bg-img font-dota">
    <div class="container">
      <div class="row">
        <div class="col-sm mt-4">
          <div id="name-hero" style="color:white">
            <h1 style="text-shadow: 0 0 7px #FF0000;">{{getCurrentRoom.player1.username}}</h1>
          </div>

          <div id="healt-bar">
            <div style="height: 30px" class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%;text-align:left"
                class="progress-bar rounded-pill bg-gradient"
              >
                <h4 style="margin-left:20px" class="my-auto">{{getCurrentRoom.player1.health}}</h4>
              </div>
            </div>
          </div>

          <div id="mana-bar" class="mt-1" style="width:80%">
            <div class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%;text-align:left"
                class="progress-bar rounded-pill bg-gradient2"
              >
                <h6 style="margin-left:20px" class="my-auto">{{getCurrentRoom.player1.mana}}</h6>
              </div>
            </div>
          </div>

          <div id="hero1" class="mt-3">
            <div id="img-hero">
              <div class>
                <h1
                  v-show="hero1Attacked"
                  id="damaged-hero1"
                  style="color:white;text-align:center;z-index:100;position:absolute;left:180px;text-shadow: 0 0 5px #FF0000;"
                  class
                >-200</h1>
              </div>
              <img class="hero1" height="300px" :src="getCurrentRoom.player1.image" alt />
            </div>
          </div>

          <div id="controll-hero1">
            <a
              href
              @click.prevent="attackHero1(getCurrentRoom.player1.basicAttck), showMessage2('attack')  @click="soundAttack('attack')""
            >
              <img width="100px" src="../assets/button-attack.png" class="mt-5" />
            </a>
            <a href @click.prevent="attackHero1(), showMessage2('charge')"  @click="soundAttack('charge')">
              <img width="110px" src="../assets/charge-button.png" class="mt-5" />
            </a>
            <a
              href
              @click.prevent="attackHero1(getCurrentRoom.player1.skillAttack), showMessage2('skill')" @click="soundAttack('skill')"
            >
              <img width="120px" src="../assets/skill-button.png" class="mt-5" />
            </a>
          </div>
        </div>
        <div class="col-1 mt-4">
          <div style="color:white;text-align:center">
            <h1 style="text-shadow: 0 0 7px #FF0000;font-size:50px">VS</h1>
          </div>
        </div>
        <div class="col-sm mt-4">
          <div style="color:white;text-align:right">
            <h1 style="text-shadow: 0 0 7px #FF0000;">{{getCurrentRoom.player2.username}}</h1>
          </div>

          <div id="healt-bar">
            <div style="height: 30px" class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%;text-align:right"
                class="progress-bar rounded-pill bg-gradient"
              >
                <h4 style="margin-right:20px" class="my-auto">{{getCurrentRoom.player2.health}}</h4>
              </div>
            </div>
          </div>

          <div id="mana-bar" class="mt-1 float-right" style="width:80%">
            <div class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%;text-align:right"
                class="progress-bar rounded-pill bg-gradient2"
              >
                <h6 style="margin-right:20px" class="my-auto">{{getCurrentRoom.player2.health}}</h6>
              </div>
            </div>
          </div>

          <div id="hero2" class="mt-5">
            <div id="img-hero" class="d-flex justify-content-end">
              <div class>
                <h1
                  v-show="hero2Attacked"
                  id="damaged-hero2"
                  style="color:white;text-align:center;z-index:100;position:absolute;right:180px;text-shadow: 0 0 5px #FF0000;"
                  class
                >-200</h1>
              </div>
              <img class="hero2" height="300" :src="getCurrentRoom.player2.image" alt />
            </div>
          </div>

          <div id="controll-hero2" class="d-flex justify-content-end">
            <a
              href
              @click.prevent="attackHero2(getCurrentRoom.player2.skillAttack), showMessage('skill')" @click="soundAttack('skill')"
            >
              <img width="120px" src="../assets/skill-button.png" class="mt-5" />
            </a>
            <a href @click.prevent="attackHero2(), showMessage('charge')" @click="soundAttack('charge')">
              <img width="110px" src="../assets/charge-button.png" class="mt-5" />
            </a>
            <a
              href
              @click.prevent="attackHero2(getCurrentRoom.player2.basicAttack), showMessage('attack')" @click="soundAttack('attack')"
            >
              <img
                width="100px"
                src="../assets/button-attack.png"
                class="mt-5"
                style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"
              />
            </a>
          </div>
          <div id="message" v-show="message">{{ messageText }}</div>
          <div id="message2" v-show="message2">{{ messageText2 }}</div>
        </div>
      </div>
    </div>
    <audio id="charge" src="https://gamepedia.cursecdn.com/dota2_gamepedia/c/c3/Stone_Remnant_destroy.mp3" autoplay="false" ></audio>
    <audio id="attack" src="https://gamepedia.cursecdn.com/dota2_gamepedia/d/d1/Morphling_projectile_impact1.mp3" autoplay="false" ></audio>
    <audio id="skill" src="https://gamepedia.cursecdn.com/dota2_gamepedia/e/e4/Adaptive_Strike_cast.mp3" autoplay="false" ></audio>
  </div>
</template>

<script>
export default {
  props: ["room"],
  data() {
    return {
      hero1Attacked: false,
      hero2Attacked: false,
      message: false,
      message2: false,
      messageText: "",
      messageText2: "",
      maxHealthP1: 0,
      maxHealthP2: 0,
      maxManaP1: 0,
      maxManaP2: 0,
      currentHealtP1: this.getHealthManaPlayer1,
      currentHealtP2: this.getHealthManaPlayer2
    };
  },
  methods: {
    attackHero1(damage) {
      console.log("halo");
      this.hero1Attacked = true;
      const attack = document.getElementById("damaged-hero1");
      attack.classList.add("animated", "fadeInUp");
      this.$store.dispatch("attackEnemy", {
        enemy: "player2",
        damage,
        room: this.$route.params.room
      });
      setTimeout(() => {
        this.hero1Attacked = false;
        attack.classList.remove("animated", "fadeInUp");
      }, 1000);
    },
    attackHero2(damage) {
      this.hero2Attacked = true;
      const attack = document.getElementById("damaged-hero2");
      attack.classList.add("animated", "fadeInUp");
      this.$store.dispatch("attackEnemy", {
        enemy: "player1",
        damage,
        room: this.$route.params.room
      });
      setTimeout(() => {
        this.hero2Attacked = false;
        attack.classList.remove("animated", "fadeInUp");
      }, 1000);
    },
    showMessage(type) {
      this.messageText = `Player 2 use ${type}`;
      this.message = true;
      let message = document.getElementById("message");
      message.style.visibility = "visible";
      message.classList.add("animated", "fadeInUp");
      setTimeout(function() {
        this.messageText = "";
        this.message = false;
        message.style.visibility = "hidden";
        message.classList.remove("animated", "fadeInUp");
      }, 1000);
    },
    showMessage2(type) {
      console.log(this.$store.state);
      this.messageText2 = `Player 1 use ${type}`;
      this.message2 = true;
      let message = document.getElementById("message2");
      message.style.visibility = "visible";
      message.classList.add("animated", "fadeInUp");
      setTimeout(function() {
        this.messageText2 = "";
        this.message2 = false;
        message.style.visibility = "hidden";
        message.classList.remove("animated", "fadeInUp");
      }, 1000);
    },
    soundAttack(type) {
      console.log(type)
      if(type==='attack'){
        let audio = document.getElementById('attack')
        audio.play()
      }else if(type==='charge'){
        let audio = document.getElementById('charge')
        audio.play()
      }else {
        let audio = document.getElementById('skill')
        audio.play()
      }
    }
  },
  created() {
    this.maxHealthP1 = this.$store.state.currentRoom.player1.health;
    this.maxHealthP2 = this.$store.state.currentRoom.player2.health;
    this.maxManaP1 = this.$store.state.currentRoom.player1.mana;
    this.maxManaP2 = this.$store.state.currentRoom.player2.mana;
  },
  computed: {
    getHealthManaPlayer1() {
      let health = (this.getCurrentRoom.player1.health * 100) / maxHealthP1;
      let mana = (this.getCurrentRoom.player1.mana * 100) / maxManaP1;
      return health;
    },
    getHealthManaPlayer2() {
      let health = (this.getCurrentRoom.player2.health * 100) / maxHealthP2;
      let mana = (this.getCurrentRoom.player2.mana * 100) / maxManaP2;
      return health;
    },
    getCurrentRoom() {
      return this.$store.state.currentRoom;
      /*
    {
      player1 : {
        username : "",
        hero : "",
        health : "",
        skillAttack : "",
        mana : "",
        image : "",
        thumbnail : "",
        manacost : ""
      },
      player2 : {
        username : "",
        hero : "",
        health : "",
        skillAttack : "",
        mana : "",
        image : "",
        thumbnail : "",
        manacost : ""
      }
    }
    */
    }
  }
};
</script>

<style>
.font-dota {
  font-family: trajan-pro-3, serif;
  font-style: normal;
  font-weight: 200;
}
.bg-img {
  height: 100vh;
  background-image: url("https://legion.lenovo.com/assets/images/picture/XodPQ28fltOE5WLt.png");
}
.bg-gradient {
  background-color: #ff0000;
  background-image: linear-gradient(to right, #ff0000 0%, #d53a3a 100%);
  box-shadow: 2px 2px 10px rgba(213, 57, 57, 0.36);
}
.bg-gradient2 {
  background-color: #00d2ff;
  background-image: linear-gradient(to right, #00daff 0%, #3a7bd5 100%);
  box-shadow: 2px 2px 10px rgba(57, 123, 213, 0.36);
}
.hero1 {
  animation: goyang1 8s infinite;
}
.hero2 {
  animation: goyang2 8s infinite;
}
@keyframes goyang1 {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-12px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(12px, 0, 0);
  }
}
@keyframes goyang2 {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(12px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(-12px, 0, 0);
  }
}

#message {
  width: 50%;
  text-align: center;
  position: absolute;
  bottom: 130px;
  right: 50px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: rgb(216, 193, 193);
}

#message2 {
  width: 50%;
  text-align: center;
  position: absolute;
  bottom: 150px;
  left: -580px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: rgb(216, 193, 193);
}
</style>
