<template>
  <section class="pluto_for_planet_song_list">
    <div class="pluto_for_planet_songlist_intro">
      <h1>Playlist</h1>
    </div>
    <div class="song_list">
      <div class="song_list_covers">
        <h2>Covers</h2>
      </div>
      <div class="song_list_originals">
        <h2>Originals</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pluto_for_planet_song_list {
  width: 80rem;
  margin: 4rem auto 0 auto;
}

.pluto_for_planet_songlist_intro {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  h1 {
    margin: 0 auto;
    font-size: 5rem;
    font-family: $rajdhani;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color: $text-primary;
  }
}

.song_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: 2rem auto 0 auto;
}
</style>
