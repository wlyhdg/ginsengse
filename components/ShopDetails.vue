<template>
  <div class="details">
    <div class="owner__space">
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
      <div>
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
export default {
  components: { SimpleCalendar },
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
</style>
