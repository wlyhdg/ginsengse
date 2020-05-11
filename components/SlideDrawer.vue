<template>
  <div :class="[activate ? 'open' : '', 'drawer']">
    <div class="close-icon" @click="close">
      <p>minimize</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activate: {
      type: Boolean,
      default: false
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
</style>
