<template>
  <div class="container">
    <div class="banner"></div>

    <svg
      width="238"
      height="175"
      viewBox="0 0 238 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M1.29834 174.25L119 0.890134L236.702 174.25H1.29834Z"
        fill="url(#pattern0)"
        stroke="black"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0"
            transform="translate(-0.31635) scale(0.00170073 0.002)"
          />
        </pattern>
        <image id="image0" width="960" height="500" xlink:href="/iroh.jpg" />
      </defs>
    </svg>

    <h1>{{ shops[0].owner }} | Owner</h1>

    <div
      v-for="({ focus, special }, index) in shops[0].description"
      :key="index"
    >
      <p>Specialties:</p>
      <ul>
        <li v-for="(f, index2) in focus" :key="index2">{{ f }}</li>
      </ul>

      <h3 v-for="({ name, duration, days }, index3) in special" :key="index3">
        {{ name }} | {{ duration[0] }} - {{ duration[1] }}
      </h3>

      <div>
        <span>SU</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>TR</span>
        <span>F</span>
        <span>S</span>
      </div>
    </div>

    <div>
      <ul>
        <li v-for="({ item, price }, index) in shops[0].menu" :key="index">
          <span>{{ item }}</span>
          <span>{{ price }}</span>
          <button>+</button>
        </li>
      </ul>
    </div>

    <!-- <div class="tea">
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
    </div> -->
  </div>
</template>

<script>
// import ButtonBase from '../components/ButtonBase.vue'
// import IconPlus from '../components/IconPlus.vue'
import { mapState } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState(['shops'])
  }
}
</script>

<style>
.banner {
  height: 200px;
  background: url('/iroh_dbgfmmu-pre.jpg') center/cover no-repeat;
}
</style>
