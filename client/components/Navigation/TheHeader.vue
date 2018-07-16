<template>
  <header class="the-header" :class="{ header: addHeaderClass }">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/" title="Home">
        <img class="pluto-for-planet-logo-sm" src="../../assets/images/p4plogo_transparent.png" alt="Pluto for Planet">
      </nuxt-link>
    </div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/dates">Shows</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/songs">Playlist</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/photos">Photos</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/videos">Videos</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/booking">Booking</nuxt-link></li>
        <!-- <li class="nav-item">
          <a href="#" @click="show = !show">Social</a>
          <transition name="fade">
            <TheSocialDropdown v-if="show" />
          </transition>
        </li> -->
      </ul>
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import TheSocialDropdown from "@/components/Social/TheSocialDropdown"

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    Logo,
    TheSocialDropdown
  },
  data() {
    return {
      navPositionRelative: true,
      show: false
    }
  },
  computed: {
    addHeaderClass() {
      if (this.$route.path === '/') return !this.navPositionRelative

      return this.navPositionRelative
    }
  }
};
</script>


<style lang="scss" scoped>
.the-header {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: rgba(0, 0, 0, .7);
  box-sizing: border-box;
  padding: 0 2rem;
}

.header {
  position: relative;
  background-color: $black;
}

.pluto-for-planet-logo-sm {
  padding-top: .5rem;
  width: 5rem;
  height: 4rem;
}


.logo { 
  position: absolute;

  a {
    display: flex;
    text-decoration: none;
    font-family: $righteous;
    text-align: center;
  }
}

.social-media {
  width: 40rem;
}

.navigation-items {
  display: none;
}

@media (min-width: 970px) {
  .navigation-items {
    display: block;
    width: 70rem;
    margin: 0 auto;
  }
}

@media (max-width: 970px) {
  .the-header {
    background-color: $black;
  }
}

.nav-list {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.nav-item {
  color: $purple-primary;
  font-family: $rajdhani;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1rem;
}

@media (max-width: 1280px) {
  .nav-item {
    font-size: 1.4rem;
  }
}



.nav-item a {
  text-decoration: none;
  color: $purple-primary;
  transition: .5s;

  &:hover { 
    color: lighten($purple-primary, 15%)
  }
}

.nav-item a:active,
.nav-item a.nuxt-link-active 
{
  color: rgb(182, 77, 151);
}

// .nav-item-social {
//   color: $purple-primary;
//   font-family: $rajdhani;
//   font-size: 1.8rem;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: .1rem;
// }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
