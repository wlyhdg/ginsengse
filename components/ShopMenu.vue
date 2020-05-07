<template>
  <div class="menu">
    <ul>
      <li
        v-for="({ item, price }, index) in shops[selectIndex].menu"
        :key="index"
      >
        <div class="menu__text">
          <span>{{ item }}</span>
          <span>¥{{ price }}</span>
        </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  line-height: 0.7em;
}

ul {
  width: 80%;
}
.menu__text {
  display: flex;
  width: 80%;
  /* margin-right: 8px; */
  justify-content: space-between;
}

.menu__text > * {
  margin: auto 5px;
}
</style>
