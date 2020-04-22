<template>
  <aside class="earth-nav">
    <nav>
      <div class="earth-nav__linkwrap">
        <a>Home</a>
        <a>Tour</a>
        <a>Notable Figures</a>
        <a>Call</a>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {}
</script>

<style>
aside::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('/withered-ground-1097016.jpg') center/cover no-repeat;
  opacity: 0.5;
}

nav {
  position: relative;
  background: #607056;
  height: calc(100% + 88px);
  width: 70%;
  margin: auto;
  margin-top: -44px;
}

.earth-nav__linkwrap {
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 8px;
  text-transform: uppercase;
  color: #ffeca7;
  line-height: 3.5rem;
}
</style>
