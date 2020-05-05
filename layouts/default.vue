<template>
  <div class="earth">
    <div class="earth__inner">
      <earth-nav />
      <div class="earth__inner-nuxt">
        <!-- <nuxt /> -->
        <test />
      </div>
    </div>
  </div>
</template>

<script>
import EarthNav from '../components/EarthNav.vue'
import Test from '../components/Test.vue'
export default {
  components: { EarthNav, Test }
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
  border: 5px solid #83744e;
}

aside.earth-nav {
  position: absolute;
  width: 25%;
  right: 0;
  height: 100%;
}

.earth__inner-nuxt {
  position: absolute;
  width: 75%;
  height: 100%;
}

.page-enter-active {
  transition: opacity 0.25s ease-out;
}

.page-leave-active {
  transition: opacity 0.25s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
