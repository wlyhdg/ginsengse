<template>
  <div :class="[activate ? 'open' : '', 'drawer']">
    <div class="close-icon" @click="close">
      <p>minimize</p>
    </div>
    <section class="slide-body">
      <div
        v-for="(data, index) in bodyData"
        :key="index"
        class="slide-body__checkout-item"
      >
        <div v-for="(key, idx) of Object.keys(data)" :key="idx">
          <span><span v-if="key === 'price'">¥</span>{{ data[key] }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    activate: {
      type: Boolean,
      default: false
    },
    bodyData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    close() {
      this.$emit('drawerActive', false)
    }
  }
}
</script>

<style>
.drawer {
  position: absolute;
  transition: all 1s cubic-bezier(0.37, 0.99, 0.58, 0.09);
  width: 100vw;
  height: 75%;
  transform: translateY(100%);
  background: rgba(21, 48, 16, 0.9);
  color: #f1a6a6;
  bottom: 0;
  z-index: 3030;
}

.open {
  transform: translateY(0%);
}

.close-icon {
  position: absolute;
  right: 0;
  margin: 15px;
  cursor: pointer;
}

.slide-body {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.slide-body__checkout-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
