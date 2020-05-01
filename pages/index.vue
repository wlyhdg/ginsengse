<template>
  <div class="home">
    <h1 class="home__title">GinSingSe</h1>
    <div class="home__desc">
      <h3>
        The ancient city of Ba Sing Se is known for its inpenetrable wall. But
        where its true hidden beauty lies is in its foliage of tea & herb
        selections!
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.home {
  text-align: center;
}

.earth__inner-nuxt::before {
  position: absolute;
  content: '';
  background: url('/bamboo.png') center/contain no-repeat;
  transform: translateX(-35%);
  width: 100%;
  height: 100%;
  position: absolute;
}

.earth__inner-nuxt::after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  background: url('/bamboo.png') center/contain no-repeat;
  transform: translateX(35%) rotateY(180deg);
  width: 100%;
  height: 100%;
  position: absolute;
}

.home__title {
  font-size: 87px;
  text-transform: uppercase;
}

.home__desc {
  font-size: 40px;
}

.home__desc > h3 {
  text-align: right;
  width: 80%;
  margin: 0 auto;
}
</style>
