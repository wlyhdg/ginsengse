<template>
  <div class="earth__inner--left">
    <div key="banner" :class="'banner banner-' + page"></div>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import PhotoFrame from './PhotoFrame.vue'
export default {
  components: {},
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style lang="scss">
.banner {
  background: center/cover no-repeat;
  position: relative;
  &.banner-iroh {
    background-image: url('/iroh_dbgfmmu-pre.jpg');
  }
  &.banner-toph {
    background-image: url('/toph_beifong_wallpaper_by_damionmauville_dbh63rc-pre.jpg');
  }
  &.banner-kyoshi {
    background-image: url('/kyoshi_wallpaper_by_damionmauville_dbg6u69-pre.jpg');
  }
}

.pf {
  position: absolute;
  // bottom: -90px;
  // left: calc(46.15% - 300px);
  width: 100%;
  height: 100%;
  z-index: 1;
}

.earth__inner--left {
  height: 100%;
}

.test-enter-active,
.test-leave-active {
  transition: all 0.4s ease;
}

.test-enter,
.test-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}

.details__descr-0 {
  margin: 20px;
}
</style>
