<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    viewBox="0 0 101 102"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1">
      <rect
        id="btnbkgnd"
        y="1"
        :width="width"
        :height="height"
        fill="#49412B"
      />
      <button-theme />
      <slot></slot>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="50.5"
        y1="0"
        x2="50.5"
        y2="45"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#223F25" />
        <stop offset="1" stop-color="#303F32" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import ButtonTheme from './ButtonTheme.vue'

export default {
  components: { ButtonTheme },
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
      default: 102
    },
    width: {
      type: Number,
      default: 102
    },
    bgColor: {
      type: String,
      default: '#49412B'
    }
  }
}
</script>

<style></style>
