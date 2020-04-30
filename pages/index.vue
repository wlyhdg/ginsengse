<template>
  <div class="container">
    <div class="banner"></div>
    <h1>
      The ancient city of Ba Sing Se is known for its inpenetrable wall. But
      where its true hidden beauty lies is in its foliage of tea & herb
      selections!
    </h1>
    <div class="tea">
      <p class="tea__name">Jasmine Tea</p>
      <p>¥745.65</p>
      <button-base class="tea__add-btn" scaling="0.32">
        <icon-plus />
      </button-base>
    </div>
    <div class="tea">
      <p class="tea__name">Oolong Tea</p>
      <p>¥745.65</p>
      <button-base class="tea__add-btn" scaling="0.32">
        <icon-plus />
      </button-base>
    </div>
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
.banner {
  height: 200px;
  background: url('/iroh_dbgfmmu-pre.jpg') center/cover no-repeat;
}

.tea {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: -65px;
}

.tea__name {
  margin-left: 30px;
}
</style>
