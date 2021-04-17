<template>
  <div id="app">
    <div class="my-container">
      <h1 class="my-title">Baify</h1>

      <div v-if="currentPlaylistStored == ''">
        <h3 class="my-subtitle">Select a playlist</h3>
        <playlists
          v-for="playlist in this.playlists"
          :key="playlist.name"
          :playlist="playlist"
        />
      </div>
      
      <div v-else>
         <song v-for="song in this.currentPlaylistSongs" :key="song.key" :song="song" />
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
    ...mapState(["playlists", "currentPlaylistSongs", "currentPlaylistStored"]),
  },

  methods: {},

  created() {},
};
</script>

<style>
@import "styles/styles.css";
</style>

