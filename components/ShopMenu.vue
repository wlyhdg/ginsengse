<template>
  <div class="menu">
    <ul>
      <li
        v-for="({ item, price }, index) in shops[selectIndex].menu"
        :key="index"
      >
        <span>{{ item }}</span>
        <span>¥{{ price }}</span>
        <button-base />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ButtonBase from './ButtonBase.vue'
export default {
  components: { ButtonBase },
  computed: {
    ...mapState(['shops', 'page']),
    ...mapGetters(['selectIndex'])
  }
}
</script>

<style>
.menu {
  display: grid;
  place-items: center;
}

li {
  list-style-type: none;
}
</style>
