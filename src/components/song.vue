<template>
        <div class="song" @click="play(song)">
          "{{song.title}}" by {{song.artist}}
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

<style>
.song{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 5vh;
  font-size: 1.3em;
  margin: 20px;
  padding: 10px;
  border: 1px solid whitesmoke;
  cursor: pointer;
}

.song:hover {
  background-color: whitesmoke;
}

</style>