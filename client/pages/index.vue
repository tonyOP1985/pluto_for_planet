<template>
  <div class="home-page">
    <!-- <section class="intro">
      <div class="banner-wrapper">
        <h3 class="pluto-for-planet-banner">Pluto For Planet</h3>
      </div>
    </section> -->

    <section class="featured-dates">
      <div class="featured-dates-header">
        <h2>Dates</h2>
        <nuxt-link to="/dates">
          View all upcoming dates
        </nuxt-link>
      </div>
      <article class="date">
        <Dates />
      </article>
    </section>

    <!-- <section class="photos">
      <div class="photos-header">
        <h2>Featured Photos</h2>
        <nuxt-link to="/photos">
          View all photos
        </nuxt-link>
      </div>
      <article class="pluto-for-planet-photos">
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
        <div class="photo-container"></div>
      </article>
    </section> -->
  </div>
</template>

<script>
import Dates from '@/components/Dates/Date'
import TheBanner from '@/components/Banner/TheBanner'

export default {
  components: {
    Dates,
    TheBanner
  }
}
</script>


<style lang="scss" scoped>
// .home-page {
//   z-index: 0;
// }

.intro {
  height: 100vh;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/pluto_for_planet.jpg');
  // background-image: url('~assets/images/pluto_for_planet_croped.jpg');
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

.featured-dates, .photos {
  width: 100%;
  padding-top: 2rem;
}

.photos {
  margin-top: 4rem;
}

.featured-dates-header, .photos-header {
  width: 70%;
  margin: 0 auto;
  font-family: $rajdhani;

  h2 {
    text-align: left;
    width: 40rem;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 1rem;
    color: $text-primary;
  }

  a {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: $text-secondary;
    width: 19rem;
    margin: 1rem 0;
    font-size: 1.4rem;
    font-weight: 700;
    transition: .5s;

    &:hover {
      color: darken($text-primary, 3%);
    }
  }
}

.pluto-for-planet-photos {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  .photo-container {
    height: 23.2rem;
    width: 23.2rem;
    background-color: $black;
    background-image: url('../assets/images/p4p.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    margin: 0 1rem 1.5rem 1rem;
  }
}

picture {
  width: 100px;
  height: 100px;
}

@media(min-width: 1200px) {
  .featured-dates-header, .photos-header, .pluto-for-planet-photos {
    // width: 82.8rem;
    // width: 130.0rem;
    width: 80%;
  }
}

@media(max-width: 1200px) {
  .banner-wrapper, .pluto-for-planet-banner{
    width: 17.7rem;
  }
}
</style>
