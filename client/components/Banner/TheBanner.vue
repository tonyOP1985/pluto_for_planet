<template>
  <section class="intro">
    <div class="banner-wrapper">
      <h3 class="pluto-for-planet-banner" :class="{ add_width: addWidth }">{{ changeBanner }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banner: '',
      bannerImage: '',
      addWidth: false
    }
  },
  computed: {
    changeBanner() {
      if (this.$route.path === '/dates') {
        this.banner = 'Upcoming Dates'
        this.addWidth = !this.addWidth
        return this.banner
        console.log(banner)
      }
      else if (this.$route.path === '/') {
        this.banner = 'Pluto for Planet'
        return this.banner
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/pluto_for_planet.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
}

@font-face {
  font-family: 'Iron Maiden';
  src: url("~assets/fonts/ipp.ttf");
}

.banner-wrapper {
  height: 12rem;
  width: 15%;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  right: 0;
  text-align: left;
  margin: 0 1rem 1rem 0;

  .pluto-for-planet-banner {
    width: 100%;
    height: 100%;
    font-family: 'Iron Maiden';
    font-size: 3.5rem;
    color: rgb(224, 166, 166);
  }
}

.add_width {
  width: 20%;
}
</style>
