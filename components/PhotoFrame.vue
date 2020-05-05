<template>
  <svg
    :width="svgWidth"
    :height="svgHeight"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path :d="vectorInfo" fill="url(#pattern0)" stroke="black" />
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
      <image
        id="image0"
        :width="imageWidth"
        :height="imageHeight"
        :xlink:href="imgLink"
      />
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: '0 0 274 233'
    },
    svgWidth: {
      type: String,
      default: '274'
    },
    svgHeight: {
      type: String,
      default: '233'
    },
    imageWidth: {
      type: String,
      default: '960'
    },
    imageHeight: {
      type: String,
      default: '500'
    },
    vectorInfo: {
      type: String,
      default: 'M1.29834 174.25L119 0.890134L236.702 174.25H1.29834Z'
    },
    imgLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
