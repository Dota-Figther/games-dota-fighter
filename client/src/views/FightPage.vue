<template>
  <div class="bg-img font-dota">
    <div class="container">
      <div class="row">
        <div class="col-sm mt-4">
          <div id="name-hero" style="color:white">
            <h1>Onta</h1>
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

          <div id="hero1" class="mt-5">
            <div id="img-hero">
              <div v-if="attackHero1" id="attack-hero1" class="attack">
                <h1>-200</h1>
              </div>
              <img class="hero1" width="350px" src="../assets/hero1.png" alt />
            </div>
          </div>

          <div id="controll-hero1">
            <a href>
              <img width="100px" src="../assets/button-attack.png" class="mt-5" />
            </a>
            <a href>
              <img width="80px" src="../assets/button-defend.png" class="mt-5" />
            </a>
          </div>
        </div>
        <div class="col-1 mt-4">
          <div style="color:white;text-align:right">
            <h1>VS</h1>
          </div>
        </div>
        <div class="col-sm mt-4">
          <div style="color:white;text-align:right">
            <h1>Dobleh</h1>
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

          <div id="hero2" class="mt-5">
            <div id="img-hero" class="d-flex justify-content-end">
              <img class="hero2" width="350px" src="../assets/hero2.png" alt />
            </div>
          </div>

          <div id="controll-hero2" class="d-flex justify-content-end">
            <a href @click.prevent="attackPlayer1">
              <img
                width="80px"
                src="../assets/button-defend.png"
                class="mt-5"
                style="padding-top:10px"
              />
            </a>
            <a href>
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
  data () {
    return {
      attackHero1: false
    }
  },
  methods: {
    attackPlayer1 () {
      this.attackHero1 = true
    }
  }
}
</script>

<style>
.attack {
  animation: fadeInUp 5s;
}

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
  background-color: #00d2ff;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 100%);
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
