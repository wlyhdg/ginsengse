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
      <div v-if="bodyData" class="price-total">¥{{ sumOne }}</div>
      <div
        v-if="checkout"
        class="slide-body__checkout-btn"
        @click="checkoutItems()"
      >
        <button-base>Checkout</button-base>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonBase from './ButtonBase.vue'

export default {
  components: { ButtonBase },
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
      show: false,
      checkout: true
    }
  },
  computed: {
    sumOne() {
      let priceTotal = 0
      if (this.bodyData) {
        this.bodyData.forEach(({ price }) => (priceTotal += price))
      }
      return priceTotal
    }
  },
  methods: {
    close() {
      this.$emit('drawerActive', false)
    },
    checkoutItems() {
      this.$store.commit('clearCart')
      this.$store.commit('toggleDrawer', false)
      this.$router.push('/')
    },
    calculateTotal() {
      let sum = 0
      if (this.bodyData) {
        this.bodyData.forEach(({ price }) => (sum += price))
        return sum
      }
    }
  }
}
</script>

<style lang="scss">
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
  transition: border 2s ease;
  border: 1px solid transparent;
  position: absolute;
  right: 0;
  margin: 15px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    background: pink;
    top: 0;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: 1s all ease;
  }
  &::after {
    content: '';
    position: absolute;
    background: pink;
    bottom: 0;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: 1s all ease;
  }
  &:hover {
    &::before,
    &::after {
      transform: scaleX(1);
    }
  }
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

.slide-body__checkout-btn,
.price-total {
  margin-left: auto;
  margin-top: 15px;
}

.price-total {
  border-top: 1px gray solid;
}
</style>
