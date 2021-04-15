<template>
    <div class="my-img-container">
        <div
          v-for="song in songs"
          :key="song.src"     
          alt=""
          class="img-name image"
          :class="playlist.src == playlist.src ? 'song playing' : 'song'">
          {{song.title}} <button @click="play(song)"></button>
        <div/>
      </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  components: { },
  name: "songs",

  computed: {
    ...mapState(["songs"]),
  },

  methods: {
      ...mapActions(["play"]),  
},
}
</script>