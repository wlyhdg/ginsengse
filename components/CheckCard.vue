<template>
  <div class="check-container">
    <p class="check--reveal">Checkout</p>
    <div class="circle-loader load-complete">
      <div class="checkmark draw"></div>
    </div>
    <p class="check--reveal">Complete</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
// Define vars we'll be using
$brand-success: #67743f;
$loader-size: 3em;
$check-height: $loader-size/2;
$check-width: $check-height/2;
$check-left: ($loader-size/6 + $loader-size/12);
$check-thickness: 3px;
$check-color: $brand-success;

.check-container {
  color: #67743f;
  position: absolute;
  text-align: center;
}

.circle-loader {
  margin-bottom: $loader-size/2;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: $check-color;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: inline-block;
  // vertical-align: top;
  border-radius: 10px;
  width: $loader-size;
  height: $loader-size;
}

.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: $check-color;
  transition: border 500ms ease-out;
}

.check--reveal {
  margin-bottom: 30px;
}

.checkmark {
  // display: none;

  &.draw:after {
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
  }

  &:after {
    opacity: 1;
    height: $check-height;
    width: $check-width;
    transform-origin: left top;
    border-right: $check-thickness solid $check-color;
    border-top: $check-thickness solid $check-color;
    content: '';
    left: $check-left;
    top: $check-height;
    position: absolute;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: $check-width;
    opacity: 1;
  }
  40% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
  100% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
}
</style>
