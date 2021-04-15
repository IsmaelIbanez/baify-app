<template>
    <div class="my-img-container">
        <img
          data-tilt
          :src="playlist.img"
          @click="goToPlaylist(playlist.playlist)"
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
      playlist: String,
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
