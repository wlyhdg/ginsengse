<template>
  <div>
    <ul>
      <li
        v-for="({ item, price }, index) in shops[currentIndex].menu"
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
import { mapState } from 'vuex'
import ButtonBase from './ButtonBase.vue'
export default {
  components: { ButtonBase },
  computed: {
    ...mapState(['shops', 'page']),
    currentIndex() {
      let resultingIndex = 0
      for (let i = 0; i < this.shops.length; i++) {
        if (this.shops[i].tag === this.page) {
          resultingIndex = i
          break
        }
      }
      return resultingIndex
    }
  }
}
</script>

<style></style>
