<template>
  <ul class="social-dropdown">
    <li class="icon-facebook">
      <a href="https://www.facebook.com/PlutoforPlanet/" target="_blank">
        <i class="fab fa-facebook-f"></i>
        <div class="divider"></div>
        <span>facebook</span>
      </a>
    </li>
    <li class="icon-instagram">
      <a href="https://www.instagram.com/pluto_for_planet/" target="_blank">
        <i class="fab fa-instagram"></i>
        <div class="divider"></div>
        <span>Instagram</span>
      </a>
    </li>
    <li class="icon-youtube">
      <a href="https://www.youtube.com/user/PlutoForPlanet" target="_blank">
        <i class="fab fa-youtube"></i>
        <div class="divider-youtube"></div>
        <span>YouTube</span>
      </a>
    </li>
    <li class="icon-spotify">
      <a href="https://open.spotify.com/artist/2dj9Oxm92OHQEFOGdmGrBG" target="_blank">
        <i class="fab fa-spotify"></i>
        <div class="divider"></div>
        <span>Spotify</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social-dropdown {
  position: absolute;
  width: 15rem;
  height: 20rem;
  background: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  top: 5rem;
  text-transform: none;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0;
  list-style: none;

  li {
    width: 100%;
    height: 5rem;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      height: 5rem;
      margin: 0 auto;
      text-decoration: none;
      color: inherit;
      font-size: 1.5rem;
    }
  }

  .icon-facebook {
    background-color: rgb(59, 89, 152);
    color: rgb(255, 255, 255);
  }

  .icon-instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: rgb(255, 255, 255);
  }

  .icon-youtube {
    background-color: rgb(255, 255, 255);

    a {
      i {
        color: rgb(255, 0, 0);
      }

      span {
        color: rgb(0, 0, 0);
        font-family: 'Roboto', sans-serif;
      }
    }
  }

  .icon-spotify {
    a {

      i {
        color: rgb(132, 189, 0); 
      }
      span {
        font-family: 'Montserrat', sans-serif;
        color: rgb(255, 255, 255);
      }
    }
  }
}

i {
  font-size: 2rem;
  width: 2.3rem;
  text-align: center;
}

span {
  width: 6.6rem;
}

.divider {
  width: .1rem;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.divider-youtube {
  width: .1rem;
  height: 100%;
  background-color: rgb(0, 0, 0);
}
</style>
