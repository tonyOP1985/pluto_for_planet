<template>
  <footer>
    <div class="back-to-top">
      <div @click="scrollToTop">
        <i class="fas fa-chevron-circle-up"></i>
        <span>Back to top</span>
      </div>
    </div>
    <div class="social-media">
      <ul>
        <li>
          <a href="https://www.facebook.com/PlutoforPlanet/" target="_blank" class="icon-facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pluto_for_planet/" target="_blank" class="icon-instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/PlutoForPlanet" target="_blank" class="icon-youtube">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/2dj9Oxm92OHQEFOGdmGrBG" target="_blank" class="icon-spotify">
            <i class="fab fa-spotify"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright">
      <span>2018 Pluto For Planet</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>


<style lang="scss" scoped>
footer {
  width: 100%;
  height: 20rem;
  margin-top: 2rem;
  background-color: $black;
  display: block;
  flex-direction: column;
  align-items: center;
  color: $text-primary;
}

.back-to-top {
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;

  div {
    color: $text-primary;
    text-decoration: none;
    margin: 0 auto;
    transition: .5s;

    i {
      font-size: 4rem;
    }

    span {
      display: block;
      text-transform: uppercase;
      font-size: 1.4rem;
    }

    &:hover {
      color: $purple-primary;
    }
  }
}

.social-media {
  width: 20rem;
  height: 3rem;
  margin: 0 auto;

  ul {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  li {
    width: 3rem;
    height: 3rem;

    a {
      color: $text-primary;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-decoration: none;
      transition: .5s;

      i {
        font-size: 2rem;
      }
    }
  }
}

.icon-facebook:hover {
  color: $facebook-blue;
}

.icon-instagram:hover {
  color: $instagram-red;
}

.icon-youtube:hover {
  color: $youtube-red;
}

.icon-spotify:hover {
  color: $spotify-green;
}

.footer-copyright {
  width: 20rem;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;

  span {
    display: block;
    margin: 0 auto;
    font-size: 1.4rem;
  }
}
</style>
