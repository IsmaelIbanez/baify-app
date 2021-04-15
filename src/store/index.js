import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    index: 0,
    currentSong: {},
    isPlaying: false,
    audio: new Audio(),

    playlists: [{
      playlist: "Relax",
      img: require("../assets/images/relax.jpg"),
    },
    {
      playlist: "Workout",
      img: require("../assets/images/work.jpg"),
    },
    {
      playlist: "Chill",
      img: require("../assets/images/chill.png"),
    },
    {
      playlist: "Piano",
      img: require("../assets/images/piano.jpg"),
    },
    {
      playlist: "LoFi",
      img: require("../assets/images/lofi.png"),
    },
    {
      playlist: "Rock",
      img: require("../assets/images/rock.jpg"),
    }
  ],
    songs: [
      {
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
      {
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {       
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      {   
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
    ],
  },
  mutations: {
    //async a la base de datos
    play(song) {
      if (typeof song.src != "undefined") {
        this.song = song;

        this.audio.src = this.current.src;
      }

      this.audio.play();
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.audio.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.song = this.songs[this.index];
      this.play(this.song.audio);
    },

    setVolume(value){
      this.audio.volume = value / 100
    }
  },
  actions: {
    
  },
  created() {
    this.current = this.song[this.index];
    this.player.src = this.current.src;
  },

  getters: {
  }
})
