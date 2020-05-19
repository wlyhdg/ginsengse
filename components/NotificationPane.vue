<template>
  <div class="notif-container">
    <div
      :class="[
        bgColor ? `bkgc-${bgColor}` : '',
        textColor ? `txtc-${textColor}` : '',
        notificationCount ? 'vis' : '',
        'notification'
      ]"
      :style="style"
      @click="onClick"
    >
      <p>{{ notificationCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notificationCount: {
      type: Number,
      default: null
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    textColor: {
      type: String,
      default: 'black'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    style() {
      return {
        'background-color': this.bgColor,
        color: this.textColor,
        border: `2px solid ${this.textColor}`
      }
    }
  }
}
</script>

<style lang="scss">
$green: #243f27;
$yellow: #e1bd3c;

// @mixin bkgClrMix($color) {
//   .bkgc-#{$color} {
//     background: calc(#{$color});
//   }
// }

// @mixin txtClrMix($color) {
//   .txtc-#{$color} {
//     color: #{$color};
//   }
// }

.notification {
  border: 2px solid black;
  width: 32px;
  height: 32px;
  transform: translate3d(50%, -50%, 0);
  opacity: 0;
  border-radius: 8px;
  transition: all 1s ease;
}

.notification p {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

.vis {
  opacity: 1;
}

// .notif-container {
//   @include bkgClrMix($green);
//   @include txtClrMix($yellow);
// }
</style>
