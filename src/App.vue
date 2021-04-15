<template>
  <div id="app">
    <div class="my-container">
      <h1 class="my-title">Baify</h1>

      <div v-if="currentPlaylist == ''">
        <h3 class="my-subtitle">Select a playlist</h3>
        <playlists
          v-for="playlist in this.playlists"
          :key="playlists.indexOf(playlist) + playlist.playlist"
          :playlist="playlist"
        />
      </div>
      
      <div v-else>
         <song v-for="song in this.songs" :key="song.key" :song="song" />
      </div>

     

      <player />
    </div>
  </div>
</template>

<script>
import player from "./components/player.vue";
import playlists from "./components/playlists.vue";
import { mapState } from "vuex";
import song from "./components/song.vue";

export default {
  name: "App",
  components: {
    player,
    playlists,
    song,
  },

  /* Songsdata() {
    return {
      current: {},
      isPlaying: false,
      player: new Audio(),
    };
  },*/

  computed: {
    ...mapState(["playlists", "songs", "currentPlaylist"]),
  },

  methods: {},

  created() {},
};
</script>

<style>
@import "styles/styles.css";
</style>

