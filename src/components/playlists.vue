<template>
    <div class="my-img-container">
        <img
          data-tilt
          :src="playlist.img"
          @click="goToPlaylist(playlist.name)"
          class="img-name image"
        />
      </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";


export default {
  name: "playlists",

  props: {
    playlist:{
      name: String,
      img: String
    }
  },

  computed: {
    ...mapState(["playlists"]),
  },

  methods: {
      ...mapMutations(["play", "goToPlaylist"]),  
},
}
</script>
<style>

img {
  width: 12vw;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  opacity: 55%;
  transition: opacity 0.75s;
}
img:hover {
  opacity: 1;
}
/* END Playlist Design */
</style>