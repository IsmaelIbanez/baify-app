<template>
    <div class="my-img-container">
        <div class="song">
          {{song.title}} - {{song.artist}} <button @click="play(song)">Play</button>
          <button @click="addToFavourite(song.key)">Fav</button>
        </div>
      </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";


export default {
  name: "song",

  props:{
    song:{
      key: String,
      title: String,
      artist: String,
      src: String,
    }
  },

  computed: {
    ...mapState(["songs"]),
  },

  methods: {
      ...mapMutations({
        play: 'play',
        addToFavourite: 'addToFavourite',
      }),  
},
}
</script>