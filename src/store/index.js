import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    index: 0,
    currentSong: {},
    isPlaying: false,
    audio: new Audio(),
    currentPlaylistStored: "",
    currentPlaylist:{},
    currentPlaylistSongs: [],
    matchedSong:[],

    playlists: [{
      name: "Relax",
      img: require("../assets/images/relax.jpg"),
      songs: ["00001", "00002" , "00003", "00004", "00005"]
    },
    {
      name: "Workout",
      img: require("../assets/images/work.jpg"),
      songs: ["00006", "00007" , "00008", "00009", "00010"]
    },
    {
      name: "Chill",
      img: require("../assets/images/chill.png"),
      songs: ["00011", "00012" , "00013", "00014", "00015"]
    },
    {
      name: "Piano",
      img: require("../assets/images/piano.jpg"),
      songs: ["00016", "00017" , "00018", "00019", "00020"]
    },
    {
      name: "LoFi",
      img: require("../assets/images/lofi.png"),
      songs: ["00021", "00022" , "00023", "00024", "00025"]
    },
    {
      name: "Rock",
      img: require("../assets/images/rock.jpg"),
      songs: ["00026", "00027" , "00028", "00029", "00030"]
    },
    {
      name: "Favourites",
      img: require("../assets/images/rock.jpg"),
      songs: []
    }, 

  ],
    songs: [
      {
        key: "00001",
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
      {
        key: "00002",
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        key: "00003",
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {  
        key: "00004",     
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      {   
        key: "00005",
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        key: "00006",
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
      {
        key: "00007",
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
      {
        key: "00008",
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        key: "00009",
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {       
        key: "00010",
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      {   
        key: "00011",
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        key: "00012",
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
      {
        key: "00013",
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
      {
        key: "00014",
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        key: "00015",
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {       
        key: "00016",
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      { 
        key: "00017",  
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        key: "00018",
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
      {
        key: "00019",
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        key: "00020",
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {       
        key: "00021",
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      {   
        key: "00022",
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        key: "00023",
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
      {
        key: "00024",
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
      {
        key: "00025",
        title: "Nviltorus",
        artist: "MAJED SALIH",
        src: require("../assets/music/Workout/workout.mp3"), 
      },
      {
        key: "00026",
        title: "Chillout me",
        artist: "ANTONY RAIJEKOV",
        src: require("../assets/music/Chill/Chill.mp3"),      
      },
      {   
        key: "00027",    
        title: "Stories from Emona ",
        artist: "MAYA FILIPIČ",
        src: require("../assets/music/Piano/piano.mp3"),      
      },
      {   
        key: "00028",
        title: "Add",
        artist: "Youtube - Lee",
        src: require("../assets/music/LoFi/lofi.mp3"),       
      },
      {
        key: "00029",
        title: "Presage",
        artist: "COLOR OUT",
        src: require("../assets/music/Rock/rock.mp3"),       
      },
      {
        key: "00030",
        title: "Night Light",
        artist: "СОЛОВЬЕВ АНДРЕЙ",
        src: require("../assets/music/Relax/relax.mp3"),
      },
    ],
  },
  mutations: {
    play(state, song) {
      if (typeof song.src != "undefined") {
        state.currentSong = song;

        state.audio.src = state.currentSong.src;
      }

      state.audio.play();
      state.audio.addEventListener(
        "ended",
        function () {
          state.index++;
          if (state.index > state.songs.length - 1) {
            state.index = 0;
          }
          state.currentSong = state.songs[state.index];
          state.audio.play(state.currentSong);
        }.bind(state)
      );
      state.isPlaying = true;
    },
    pause(state) {
      state.audio.pause();
      state.isPlaying = false;
    },
    next(state) {
      state.index++;
      if (state.index > state.songs.length - 1) {
        state.index = 0;
      }

      state.currentSong = state.currentPlaylistSongs[state.index];
      state.audio.play(state.currentSong);
    },

    prev(state) {
      state.index--;
      if (state.index < 0) {
        state.index = state.songs.length - 1;
      }

      state.currentSong = state.currentPlaylistSongs[state.index];
      state.audio.play(state.currentSong);
    },

    setVolume(state, value){
      state.audio.volume = value / 100
    },

    goToPlaylist(state, newPlaylist){
      state.currentPlaylistStored = newPlaylist
      state.playlists.forEach(playlist => {
        if(playlist.name == state.currentPlaylistStored){
          state.currentPlaylist = playlist
          console.log(state.currentPlaylist)
        }
      })
      
      state.currentPlaylist.songs.forEach(songToStore => {
        state.matchedSong = state.songs.filter(song => song.key == songToStore)
        if(state.matchedSong != null){
          state.currentPlaylistSongs.push(state.matchedSong[0]);
          console.log(state.matchedSong[0])
        }
      }); 
      
    },

    goBack(state){
      state.currentPlaylistSongs = [],
      state.currentPlaylistStored = ""
    }
  
  },
  actions: {
    
  },
  created(state) {
    state.current = state.song[state.index];
    state.player.src = state.currentSong.src;
    
    if (localStorage.getItem("currentPlaylist") != ""){
      state.currentPlaylist = localStorage.getItem("currentPlaylist");
    }
  },

  getters: {
  }
})
