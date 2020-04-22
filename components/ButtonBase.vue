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
        :width="width - 1"
        :height="height"
        fill="#49412B"
      />
      <path
        id="btngrass"
        d="M21.01 16.8103L8.60652 33.8793L4.55639 26.8966L0 33.8793V0H101V24.0517L96.9499 16.8103L87.3308 40.0862L78.7243 16.8103L73.6617 26.8966L67.5865 16.8103L55.9424 45L43.2857 16.8103L31.6416 33.8793L21.01 16.8103Z"
        fill="url(#paint0_linear)"
      />
      <g id="plusicon">
        <path
          id="Vector 2"
          d="M28.9403 60.1343L71.0597 60.1343"
          stroke="#83744E"
          stroke-width="7"
        />
        <path
          id="Vector 3"
          d="M50 39.0746V81.194"
          stroke="#83744E"
          stroke-width="7"
        />
      </g>
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
      default: 102
    },
    width: {
      type: Number,
      default: 102
    },
    bgColor: {
      type: String,
      default: '#49412B'
    },
    scaling: {
      type: [Number, String],
      default: 0.5
    }
  },
  computed: {
    resize() {
      return `transform: scale(${this.scaling})`
    }
  }
}
</script>

<style>
.banana {
  transform: scale(0.5);
}
</style>
