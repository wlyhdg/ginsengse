<template>
  <div class="earth">
    <div class="earth__inner">
      <earth-nav />
      <div class="earth__inner-nuxt">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import EarthNav from '../components/EarthNav.vue'
export default {
  components: { EarthNav }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Gruppo&display=swap');

html {
  font-family: 'Gruppo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  background: #9f9f6e;
  overflow: hidden;
}

.earth::before {
  content: url('/bamboo.png');
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(1) translateY(20%) rotate(30deg);
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.earth {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.earth__inner {
  position: relative;
  align-self: center;
  width: 80%;
  height: 75vh;
  background: #b9a978;
  border: 9px solid #83744e;
}

aside.earth-nav {
  position: absolute;
  width: 25%;
  max-width: 300px;
  right: 0;
  height: 100%;
}

.earth__inner-nuxt {
  position: absolute;
  width: 70%;
}

.button {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
}
</style>
