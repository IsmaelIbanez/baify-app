<template>
    <div class="my-img-container">
        <div class="song">
          {{song.title}} - {{song.artist}} <button @click="play(song)">Play</button>
        </div>
      </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";


export default {
  components: { },
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
        play: 'play'
      }),  
},
}
</script>