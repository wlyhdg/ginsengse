<template>
  <div>
    <div key="test" class="banner">
      <transition-group name="test" tag="div">
        <photo-frame
          v-if="page == 'iroh'"
          key="one"
          class="pf"
          img-link="/iroh.jpg"
        />
        <photo-frame
          v-if="page == 'toff'"
          key="two"
          class="pf"
          img-link="/toph.jpg"
          vector-info="M0.771827 116.5L137 0.656333L273.228 116.5L137 232.344L0.771827 116.5Z"
        />
        <photo-frame
          v-if="page == 'kyoshi'"
          key="three"
          class="pf"
          img-link="/kyoshi.jpg"
          vector-info="M119.535 1.45423L137 0.500744L154.465 1.45423L171.642 4.29889L188.248 8.98767L204.012 15.443L218.672 23.5581L231.99 33.1988L243.745 44.206L253.746 56.3979L261.83 69.5739L267.864 83.5174L271.751 98.0001L273.429 112.785L272.869 127.63L270.081 142.294L265.11 156.536L258.037 170.124L248.976 182.834L238.075 194.458L225.513 204.803L211.496 213.699L196.252 221L180.034 226.583L163.107 230.358L145.75 232.261H128.25L110.893 230.358L93.9664 226.583L77.748 221L62.5045 213.699L48.4867 204.803L35.9246 194.458L25.0241 182.834L15.9633 170.124L8.89 156.536L3.91916 142.294L1.13128 127.63L0.571456 112.785L2.24869 98.0001L6.13592 83.5175L12.1702 69.5739L20.2537 56.3979L30.2548 44.206L42.0102 33.1988L55.3275 23.5581L69.9883 15.443L85.7516 8.98767L102.358 4.29889L119.535 1.45423Z"
        />
      </transition-group>
    </div>

    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PhotoFrame from './PhotoFrame.vue'
export default {
  components: { PhotoFrame },
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style>
.banner {
  position: relative;
}

.pf {
  position: absolute;
  bottom: -100px;
}

.test-enter-active,
.test-leave-active {
  transition: all 1s ease;
}

.test-enter,
.test-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}
</style>
