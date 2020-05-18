<template>
  <div class="earth">
    <check-card v-if="isCheckedOut" class="checkout--success" />
    <slide-drawer
      class="slide-drawer"
      :activate="drawerOpen"
      :body-data="cart"
      @drawerActive="drawerClose"
    />
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
import { mapState } from 'vuex'
import EarthNav from '../components/EarthNav.vue'
import Test from '../components/Test.vue'
import SlideDrawer from '../components/SlideDrawer.vue'
import CheckCard from '../components/CheckCard.vue'
export default {
  components: { EarthNav, Test, SlideDrawer, CheckCard },
  computed: {
    ...mapState(['drawerOpen', 'cart', 'isCheckedOut'])
  },
  methods: {
    drawerClose(pl) {
      this.$store.commit('toggleDrawer', pl)
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Gruppo&display=swap');

html {
  background: #9f9f6e;
  overflow: hidden;
}

html,
button,
a {
  font-family: 'Gruppo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
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

.banner {
  height: 40%;
}

.container {
  display: grid;
  height: 60%;
  grid-template-columns: 6fr 7fr;
}

.center {
  text-align: center;
}

.slide-drawer {
  letter-spacing: 0.23em;
  line-height: 2.5rem;
}

.checkout--success {
  position: absolute;
  z-index: 555555;
  right: 20px;
  bottom: 20px;

  /* transform: translateX(-50%); */
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
