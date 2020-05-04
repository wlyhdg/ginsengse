<template>
  <aside class="earth-nav">
    <nav>
      <div class="earth-nav__linkwrap">
        <nuxt-link to="/"
          ><div :class="{ active: page == 'index' }">Home</div></nuxt-link
        >
        <div v-for="(shop, idx) in shops" :key="idx">
          <nuxt-link :to="shop.tag">
            <div :class="{ active: page == shop.tag }">
              {{ shop.name }}
            </div></nuxt-link
          >
        </div>
        <!-- <div class="earth-nav__shops">
          <nuxt-link to="/iroh"
            ><div :class="{ active: page == 'iroh' }">
              Zen of Iroh
            </div></nuxt-link
          >
          <nuxt-link to="/toff"
            ><div :class="{ active: page == 'toff' }">
              Toff's Tea Temple
            </div></nuxt-link
          >
          <nuxt-link to="/kyoshi"
            ><div :class="{ active: page == 'kyoshi' }">Herbs of Kyoshi</div>
          </nuxt-link>
        </div> -->
      </div>
    </nav>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['page', 'shops'])
  }
}
</script>

<style>
aside::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('/withered-ground-1097016.jpg') center/cover no-repeat;
  opacity: 0.5;
}

nav {
  position: relative;
  z-index: 100;
  background: #646424;
  height: calc(100% + 88px);
  width: 70%;
  min-width: 80px;
  max-width: 172px;
  margin: auto;
  margin-top: -44px;
  box-shadow: 1px 1px 10px 1px rgba(3, 3, 3, 0.4),
    inset 0px 0px 35px 1px rgba(3, 59, 17, 0.2);
}

.earth-nav__linkwrap {
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  color: #ffeca7;
}

.earth-nav__linkwrap .active {
  border-bottom: 1px solid #f0d77c;
}

a {
  color: #ffeca7;
  text-decoration: none;
}

.earth-nav__linkwrap > * {
  margin: 2.5rem auto;
  /* word-wrap: break-word; */
}

.earth-nav__shops div {
  /* margin: 4rem auto; */
}
</style>
