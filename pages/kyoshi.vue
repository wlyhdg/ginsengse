<template>
  <div class="container">
    <shop-details />
    <shop-menu />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopMenu from '../components/ShopMenu.vue'
import ShopDetails from '../components/ShopDetails.vue'
export default {
  components: { ShopMenu, ShopDetails },
  computed: {
    ...mapGetters(['selectIndex'])
  }
}
</script>

<style></style>
