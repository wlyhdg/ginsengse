<template>
  <div class="container">
    <shop-details />
    <shop-menu />
  </div>
</template>

<script>
import ShopMenu from '../components/ShopMenu.vue'
import ShopDetails from '../components/ShopDetails.vue'

export default {
  components: { ShopMenu, ShopDetails }
}
</script>

<style>
.banner {
  height: 200px;
}
</style>
