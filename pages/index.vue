<template>
  <div class="home">
    <div class="earth-symbol"></div>
    <div class="overlay"></div>
    <div class="home__text">
      <h1 class="home__title">GinSengSe</h1>
      <div class="home__desc">
        <h3>
          The ancient city of Ba Sing Se is known for its inpenetrable wall. But
          where its true hidden beauty lies is in its foliage of tea & herb
          selections!
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.earth-symbol {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/earthlogo.jpg') center/cover;
  /* z-index: -3; */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(147, 111, 19, 0.67);
  z-index: 2;
}

.home {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.home::before {
  position: absolute;
  content: '';
  background: url('/bamboo.png') center/contain no-repeat;
  transform: translateX(-35%);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;
}

.home::after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  background: url('/bamboo.png') center/contain no-repeat;
  transform: translateX(35%) rotateY(180deg);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.home__text {
  position: absolute;
  color: #ffe29a;
  z-index: 4;
  height: 100%;
}

.home__title {
  position: absolute;
  font-size: 87px;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  text-transform: uppercase;
  width: 90%;
}

.home__desc {
  margin: auto;
  position: relative;
  font-size: 30px;
  width: 80%;
  margin-top: 60px;
  top: 35%;
}

.home__desc > h3 {
  text-align: right;
  width: 80%;
  margin: 0 auto;
}

@media screen and (max-width: 1040px) {
  .home__title {
    font-size: 55px;
  }
}

@media screen and (max-width: 758px) {
  .home__desc {
    font-size: 25px;
  }
}

@media screen and (max-width: 500px) {
  .home__title {
    font-size: 25px;
  }
  .home__desc {
    font-size: 18px;
  }
}
</style>
