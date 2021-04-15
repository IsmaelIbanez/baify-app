<template>
    <div class="my-img-container">
        <img
          :src="playlist.img"
          class="img-name image"
        />
      </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


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
      ...mapActions(["play"]),  
},
}
</script>
