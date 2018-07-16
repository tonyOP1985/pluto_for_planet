<template>
  <div id="app">
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav 
      :show="displaySideNav"
      @close="displaySideNav = false"/>
    <nuxt class="nuxt"/>
    <TheFooter class="footer"/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSideNav from '@/components/Navigation/TheSideNav'
import TheFooter from '@/components/Footer/TheFooter'

export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter
  },
  data() {
    return {
      displaySideNav: false,
      navPositionRelative: true
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
}

body, html {
 width: 100%;
 height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nuxt {
  z-index: 0;
  flex: 1 0 auto;
}
</style>
