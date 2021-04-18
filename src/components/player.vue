<template>
  <div class="player">
    <div class="current-ta">
       <br />
      {{ currentSong.title }} - {{ currentSong.artist }}
    </div>
    <div class="controls">
      <div>
        <button class="prev button is-ghost" @click="play(songs[songs.indexOf(currentSong) - 1])" size="is-medium">
          <b-icon pack="fas" icon="backward" size="is-small"></b-icon>
        </button>
        <button
          class="play button is-ghost"
          v-if="!isPlaying"
          @click="play"
          type="is-dark"
          size="is-medium"
        >
          <b-icon pack="fas" icon="play" size="is-small"></b-icon>
        </button>
        <button
          class="pause button is-ghost"
          v-else
          @click="pause"
          type="is-dark"
          size="is-medium"
        >
          <b-icon pack="fas" icon="pause" size="is-small"></b-icon>
        </button>
        <button
          class="next button is-ghost"
          @click="play(songs[songs.indexOf(currentSong) + 1])"
          type="is-dark"
          size="is-medium"
        >
          <b-icon pack="fas" icon="forward" size="is-small"></b-icon>
        </button>
      </div>
    </div>

    <div class="slidercontainer">
      <div class="volume-icon">
        <b-icon pack="fas" icon="volume-down"></b-icon>
      </div>
      <div class="volume-slider">
        <b-slider type="is-primary" @change="setVolume(aria-valuenow)" :value="50"></b-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "player",

  computed: {
    ...mapState(["currentSong", "isPlaying", "songs"]),
  },

  methods: {
      ...mapMutations({
        play: 'play',
        pause: 'pause',
        next: 'next',
        prev: 'prev',
        setVolume: 'setVolume'
      }),  
},
}
</script>

<style>
.player {
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 70px;
  padding: 0 20px 0 20px;
}

</style>