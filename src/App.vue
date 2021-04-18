<template>
  <div id="app">
    <div class="my-container">
      <div class="title-subtitle">
          <a href="."><h1 class="my-title">Baify</h1></a>
          <h3 class="my-subtitle">Select a playlist</h3>
        
      </div>
      
      <div class="my-second-container" v-if="currentPlaylistStored == ''">
        
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
html, body {
  margin: 0;
}
.my-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: black;

  height: 100%;
  width: 100%;
  position: absolute;
  
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;

}
.current {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 

  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 100px;
  padding: 0 20px 0 10px;
  text-align: center;
}

/* Start Playlist Design  */
.my-img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  max-width: 950px;
}

img {
  width: 250px;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  opacity: 60%;
  transition: opacity 0.75s;
}
img:hover {
  opacity: 100%;
}
/* END Playlist Design */
.current-ta {
  color: whitesmoke;
  font-size: 1.2em;
  width: 400px;
}

.my-title {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 900;
  color: whitesmoke;
  text-shadow: 1px 1px 10px white;
}
.my-subtitle {
  font-size: 1.5em;
  font-weight: 600;
}

button:hover {
  opacity: 70%;
}

button {
  margin: 5px;
}

@import "styles/styles.css";
</style>

