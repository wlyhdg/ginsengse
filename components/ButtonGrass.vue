<template>
  <svg
    :style="resize"
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1">
      <rect
        id="btnbkgnd"
        y="1"
        :width="width"
        :height="height"
        :fill="bgColor"
      />
      <path
        id="btngrass"
        d="M6.65664 5.22989L2.72682 10.5402L1.44361 8.36782L0 10.5402V0H32V7.48276L30.7168 5.22989L27.6692 12.4713L24.9424 5.22989L23.3383 8.36782L21.4135 5.22989L17.7243 14L13.7143 5.22989L10.0251 10.5402L6.65664 5.22989Z"
        fill="url(#paint0_linear)"
      />
      <g id="plusicon">
        <path id="vector2" d="M8 16L24 16.0001" stroke="#83744E" />
        <path id="vector3" d="M16 8V24" stroke="#83744E" />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="16"
        y1="0"
        x2="16"
        y2="14"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#223F25" />
        <stop offset="1" stop-color="#303F32" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
// import ButtonTheme from './ButtonTheme.vue'

export default {
  components: {},
  props: {
    theme: {
      type: String,
      default: 'none'
    },
    decoration: {
      type: String,
      default: 'none'
    },
    height: {
      type: Number,
      default: 32
    },
    width: {
      type: Number,
      default: 32
    },
    bgColor: {
      type: String,
      default: '#49412B'
    },
    scaling: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    resize() {
      return `transform: scale(${this.scaling})`
    }
  }
}
</script>

<style></style>
