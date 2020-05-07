<template>
  <div class="center">
    <span :class="{ circlehl: daysActive.includes('sunday') }">SU</span>
    <span :class="{ circlehl: daysActive.includes('monday') }">M</span>
    <span :class="{ circlehl: daysActive.includes('tuesday') }">T</span>
    <span :class="{ circlehl: daysActive.includes('wednesday') }">W</span>
    <span :class="{ circlehl: daysActive.includes('thursday') }">TR</span>
    <span :class="{ circlehl: daysActive.includes('friday') }">F</span>
    <span :class="{ circlehl: daysActive.includes('saturday') }">S</span>
  </div>
</template>

<script>
export default {
  props: {
    days: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    daysActive() {
      const lower = this.days.map((i) => i.toLowerCase())
      return lower
    }
  }
}
</script>

<style>
.circlehl {
  border: 1px solid black;
  border-radius: 50%;
  padding: 3px;
}
</style>
