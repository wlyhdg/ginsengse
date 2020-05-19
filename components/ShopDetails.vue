<template>
  <div class="details">
    <div class="owner__space">
      <photo-frame
        v-if="page == 'iroh'"
        key="one"
        class="pf"
        view-box="0 0 236 174"
        img-link="/iroh_by_damionmauville_dbh31n5-pre.jpg"
      />
      <photo-frame
        v-if="page == 'toph'"
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
      <h1>
        <span class="owner__space-first">{{ shops[selectIndex].owner }} |</span>
        <span class="owner__space-second">&nbsp;Owner</span>
      </h1>
    </div>
    <div
      v-for="({ focus, special }, index) in shops[selectIndex].description"
      :key="index"
      :class="'details__descr-' + index"
    >
      <div class="focus">
        <h2>Focus</h2>
        <ul>
          <li v-for="(f, index2) in focus" :key="index2">{{ f }}</li>
        </ul>
      </div>
      <div v-for="({ name, duration, days }, index3) in special" :key="index3">
        <h2>Specialty</h2>
        <div class="center">
          <h4>{{ name }}</h4>
          <p>{{ duration[0] | firstTime }} - {{ duration[1] | secondTime }}</p>
          <simple-calendar class="sc" :days="days" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SimpleCalendar from './SimpleCalendar.vue'
import PhotoFrame from './PhotoFrame.vue'
export default {
  components: { SimpleCalendar, PhotoFrame },
  filters: {
    firstTime(time) {
      let [hour, minutes] = String(time).split('.')
      if (hour > 12) {
        hour = hour - 12
      }
      if (minutes) {
        minutes = Number(`0.${minutes}`) * minutes
      }
      return minutes ? hour + ':' + minutes : hour
    },
    secondTime(time) {
      let period = 'AM'
      let [hour, minutes] = String(time).split('.')
      if (hour > 12) {
        hour = hour - 12
        period = 'PM'
      }
      if (minutes) {
        minutes = Number(`0.${minutes}`) * 60
      }
      return minutes ? hour + ':' + minutes + period : hour + period
    }
  },
  computed: {
    ...mapState(['shops', 'page']),
    ...mapGetters(['selectIndex'])
  }
}
</script>

<style>
.details {
  border-right: 1px solid black;
}

.owner__space {
  height: 40%;
  position: relative;
  text-align: center;
  background: url('/earthlogo.jpg') center/cover;
  color: #ffe29a;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  font-size: 10px;
}

div[class^='details__descr'] {
  margin: 10px;
}

.owner__space > h1 {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 20;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: left; */
}

.owner__space-first {
  justify-self: right;
}

.sc {
  padding: 10px;
}

.owner__space::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(147, 111, 19, 0.67);
}

.pf {
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
}

@media screen and (max-width: 884px) {
  .pf {
    transform: scale(0.7);
  }
  .focus ul {
    padding: 0px;
  }
}

@media screen and (min-width: 861px) {
  .pf {
    transform: scale(1.3);
  }
}
</style>
