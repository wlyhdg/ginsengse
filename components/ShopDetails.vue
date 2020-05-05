<template>
  <div>
    <h1>{{ shops[selectIndex].owner }} | Owner</h1>

    <div
      v-for="({ focus, special }, index) in shops[selectIndex].description"
      :key="index"
    >
      <p>Specialties:</p>
      <ul>
        <li v-for="(f, index2) in focus" :key="index2">{{ f }}</li>
      </ul>

      <h3 v-for="({ name, duration, days }, index3) in special" :key="index3">
        {{ name }} | {{ duration[0] }} - {{ duration[1] }}
      </h3>

      <div>
        <span>SU</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>TR</span>
        <span>F</span>
        <span>S</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['shops', 'page']),
    ...mapGetters(['selectIndex'])
  }
}
</script>

<style></style>
