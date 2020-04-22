<template>
  <div class="container">
    <h1>
      The ancient city of Ba Sing Se is known for its inpenetrable wall. But
      where its true hidden beauty lies is in its foliage of tea & herb
      selections!
    </h1>
    <button-base>
      <icon-plus />
    </button-base>
  </div>
</template>

<script>
import ButtonBase from '../components/ButtonBase.vue'
import IconPlus from '../components/IconPlus.vue'

export default {
  components: { ButtonBase, IconPlus }
}
</script>

<style>
body {
  font-size: 8px;
}
</style>
