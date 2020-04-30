<template>
  <aside class="earth-nav">
    <nav>
      <div class="earth-nav__linkwrap">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/iroh">Zen of Iroh</nuxt-link>
        <nuxt-link to="/toff">Toff's Tea Temple</nuxt-link>
        <nuxt-link to="/kyoshi">Herbs of Kyoshi </nuxt-link>
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
  box-shadow: 1px 1px 10px 1px rgba(3, 3, 3, 0.4),
    inset 0px 0px 25px 0.5px rgba(90, 55, 3, 0.1);
}

.earth-nav__linkwrap {
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 16px;
  text-transform: uppercase;
  color: #ffeca7;
}

a {
  color: #ffeca7;
  text-decoration: none;
}

.earth-nav__linkwrap > * {
  margin: 2.5rem 10px;
  /* word-wrap: break-word; */
}
</style>
