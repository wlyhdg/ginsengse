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
@media screen and (max-width: 500px) {
  ul {
    padding-left: 0px;
    margin-left: 0px;
  }
  ul,
  p,
  h3,
  h4,
  .sc span {
    font-size: 11px;
  }
  h2 {
    font-size: 18px;
  }
  .menu-btn {
    transform: scale(0.7) !important;
  }
}

@media screen and (min-width: 500px) and (max-width: 870px) {
  ul,
  p,
  h3,
  h4,
  .sc span {
    font-size: 13px;
  }
  h2 {
    font-size: 22px;
  }
  .menu-btn {
    transform: scale(0.7) !important;
  }
}
</style>
