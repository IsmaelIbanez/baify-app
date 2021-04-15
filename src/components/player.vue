<template>
  <div class="player">
    <div class="current-ta">
       <br />
      {{ currentSong.title }} - {{ currentSong.artist }}
    </div>
    <div class="controls">
      <div>
        <button class="prev button is-ghost" @click="prev" size="is-medium">
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
          @click="next"
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
        <b-slider type="is-primary" v-on:change="setVolume(this.value)" :value="0"></b-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "player",

  computed: {
    ...mapState(["currentSong", "isPlaying"]),
  },

  methods: {
      ...mapActions(["play", "setVolume", "prev", "next", "pause"]),  
},
}
</script>
