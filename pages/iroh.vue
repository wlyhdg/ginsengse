<template>
  <div class="container">
    <!-- <div class="banner"></div> -->

    <h1>{{ shops[0].owner }} | Owner</h1>

    <div
      v-for="({ focus, special }, index) in shops[0].description"
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

    <shop-menu />

    <!-- <div>
      <ul>
        <li v-for="({ item, price }, index) in shops[0].menu" :key="index">
          <span>{{ item }}</span>
          <span>¥{{ price }}</span>
          <button-base />
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopMenu from '../components/ShopMenu.vue'
// import IconPlus from '../components/IconPlus.vue'
export default {
  components: { ShopMenu },
  computed: {
    ...mapState(['shops', 'page'])
  }
}
</script>

<style>
.banner {
  height: 200px;
}
</style>
