<template>
  <div class="bg-img font-dota">
    <div class="container">
      <div class="row">
        <div class="col-sm mt-4">
          <div id="name-hero" style="color:white">
            <h1 style="text-shadow: 0 0 7px #FF0000;">Onta</h1>
          </div>

          <div id="healt-bar">
            <div style="height: 30px" class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 55%;text-align:left"
                class="progress-bar rounded-pill bg-gradient"
              >
                <h4 style="margin-left:20px" class="my-auto">550</h4>
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
                style="width: 55%;text-align:left"
                class="progress-bar rounded-pill bg-gradient2"
              >
                <h6 style="margin-left:20px" class="my-auto">550</h6>
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
                >
                  -200
                </h1>
              </div>
              <img class="hero1" width="350px" src="../assets/hero1.png" alt />
            </div>
          </div>

          <div id="controll-hero1">
            <a href @click.prevent="attackHero2">
              <img
                width="100px"
                src="../assets/button-attack.png"
                class="mt-5"
              />
            </a>
            <a href @click.prevent="attackHero2">
              <img
                width="110px"
                src="../assets/charge-button.png"
                class="mt-5"
              />
            </a>
            <a href @click.prevent="attackHero2">
              <img
                width="120px"
                src="../assets/skill-button.png"
                class="mt-5"
              />
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
            <h1 style="text-shadow: 0 0 7px #FF0000;">Dobleh</h1>
          </div>

          <div id="healt-bar">
            <div style="height: 30px" class="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%;text-align:right"
                class="progress-bar rounded-pill bg-gradient"
              >
                <h4 style="margin-right:20px" class="my-auto">1000</h4>
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
                style="width: 55%;text-align:right"
                class="progress-bar rounded-pill bg-gradient2"
              >
                <h6 style="margin-right:20px" class="my-auto">550</h6>
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
                >
                  -200
                </h1>
              </div>
              <img class="hero2" width="350px" src="../assets/hero2.png" alt />
            </div>
          </div>

          <div id="controll-hero2" class="d-flex justify-content-end">
            <a href @click.prevent="attackHero1">
              <img
                width="120px"
                src="../assets/skill-button.png"
                class="mt-5"
              />
            </a>
            <a href @click.prevent="attackHero1">
              <img
                width="110px"
                src="../assets/charge-button.png"
                class="mt-5"
              />
            </a>
            <a href @click.prevent="attackHero1">
              <img
                width="100px"
                src="../assets/button-attack.png"
                class="mt-5"
                style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero1Attacked: false,
      hero2Attacked: false
    };
  },
  methods: {
    attackHero1() {
      this.hero1Attacked = true;
      const attack = document.getElementById("damaged-hero1");
      attack.classList.add("animated", "fadeInUp");
      setTimeout(() => {
        this.hero1Attacked = false;
        attack.classList.remove("animated", "fadeInUp");
      }, 1000);
    },
    attackHero2() {
      this.hero2Attacked = true;
      const attack = document.getElementById("damaged-hero2");
      attack.classList.add("animated", "fadeInUp");
      setTimeout(() => {
        this.hero2Attacked = false;
        attack.classList.remove("animated", "fadeInUp");
      }, 1000);
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
</style>
