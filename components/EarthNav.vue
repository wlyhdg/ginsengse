<template>
  <aside class="earth-nav">
    <notification-pane
      class="notif-pane"
      bg-color="#243F27"
      text-color="#E1BD3C"
      :notification-count="cartQty"
      :on-click="openDrawer"
    />
    <nav>
      <div class="earth-nav__linkwrap">
        <div class="nl">
          <div :class="[{ active: page == 'index' }, 'nl_underline']"></div>
          <nuxt-link to="/">
            <div>Home</div>
          </nuxt-link>
        </div>
        <div v-for="(shop, idx) in shops" :key="idx" class="nl">
          <div :class="[{ active: page == shop.tag }, 'nl_underline']"></div>
          <nuxt-link :to="'/' + shop.tag">
            <div>
              {{ shop.name }}
            </div></nuxt-link
          >
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NotificationPane from './NotificationPane.vue'
export default {
  components: { NotificationPane },
  computed: {
    ...mapState(['page', 'shops']),
    ...mapGetters(['cartQty'])
  },
  methods: {
    openDrawer() {
      this.$store.commit('openDrawer')
    }
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
  position: relative;
  color: #ffeca7;
}

.earth-nav__linkwrap .active {
  /* border-bottom: 1px solid #f0d77c; */
  opacity: 1;
  animation: slide 1s;
  transition: all 1s;
  transition-timing-function: cubic-bezier(1, 0, 0, 1);
}

a {
  color: #ffeca7;
  text-decoration: none;
}

.earth-nav__linkwrap > * {
  margin: 2.5rem auto;
  /* word-wrap: break-word; */
}

.notif-pane {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.nl {
  position: relative;
}

.nl_underline {
  position: absolute;
  background-color: #f0d77c;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  height: 1px;
  opacity: 0;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
}
</style>
