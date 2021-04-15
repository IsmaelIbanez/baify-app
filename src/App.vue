<template>
  <div id="app">
    <div class="my-container">
      <h1 class="my-title">Baify</h1>
      <h3 class="my-subtitle">Select a playlist</h3>
      <playlists
        v-for="(playlist, index) in this.playlists"
        :key="index"
        :playlist="playlist"
      />
      <player />
    </div>
  </div>
</template>

<script>
import player from "./components/player.vue";
import playlists from "./components/playlists.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    player,
    playlists,
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      player: new Audio(),
    };
  },

  computed: {
    ...mapState(["playlists"]),
  },

  methods: {
    ...mapActions(["play"]),
  },

  created() {},
};
</script>
<style>
@import "styles/styles.css";
</style>

