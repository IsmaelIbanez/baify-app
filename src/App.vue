<template>
  <div id="app">
    <div class="hero-body is-flex">
      <header>
        <h1 class="is-size-1">Baify - Player</h1>
      </header>
      <main>

              <h2 class="song-title">{{current.title}} - <span>{{ current.artist }}</span></h2>
              <div class="controls">
                <b-button class="prev" @click="prev" type="is-dark" size="is-large"><b-icon pack="fas" icon="backward" size="is-small"></b-icon></b-button>
                <b-button class="play" v-if="!isPlaying" @click="play" type="is-dark" size="is-large"> <b-icon pack="fas" icon="play" size="is-small"></b-icon></b-button>
                <b-button class="pause" v-else @click="pause" type="is-dark" size="is-large"><b-icon pack="fas" icon="pause" size="is-small"></b-icon></b-button>
                <b-button class="next" @click="next" type="is-dark" size="is-large"><b-icon pack="fas" icon="forward" size="is-small"></b-icon></b-button>
              </div>

            
            <!-- <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ?  'song playing' : 'song'">
              {{ song.title}} - {{song.artist}}
            </button> -->
            <div class="playlist">
              <h3>Playlists</h3>
              <b-button class="is-light" v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ?  'song playing' : 'song'">
               <!--  <img :src="(song.img)" alt="" class="image is-32x32"> -->
               {{ song.title }} - {{song.artist}}
              </b-button>
              
              </div> 
           
        
      </main>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Relax / Night Light',
          artist: 'СОЛОВЬЕВ АНДРЕЙ',
          src: require('./assets/music/Relax/relax.mp3'),
          img: require('./assets/images/sleep.jpg')
        },
        {
          title: 'Workout / Nviltorus',
          artist: 'MAJED SALIH',
          src: require('./assets/music/Workout/workout.mp3'),
          img: require('./assets/images/work.jpg')
        },
        {
          title: 'Chill / Chillout me',
          artist: 'ANTONY RAIJEKOV',
          src: require('./assets/music/Chill/Chill.mp3'),
          img: require('./assets/images/chill.jpg')
        },
        {
          title: 'Piano / Stories from Emona ',
          artist: 'MAYA FILIPIČ',
          src: require('./assets/music/Piano/piano.mp3'),
          img: require('./assets/images/piano.jpg')
        },
        {
          title: 'LoFi Playlist',
          artist: 'Youtube - Lee',
          src: require('./assets/music/LoFi/lofi.mp3'),
          img: require('./assets/images/lofi.jpg')
        },
        {
          title: 'Rock / Presage',
          artist: 'COLOR OUT',
          src: require('./assets/music/Rock/rock.mp3'),
          img: require('./assets/images/lofi.jpg')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;

        this.player.src = this.current.src;
      }

      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.songs.length -1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    }
  },
  created () {
    this.current = this.song[this.index];
    this.player.src = this.current.src;
  }
}
</script>

<style>
.controls {
  display: flex;
  justify-content: center;
  padding: 30px 15px;
}

.playlist {
  padding: 0px 30px;
}

.playlist h3 {
  color: black;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
}

.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

.playlist .song.playing {
  color: white;
  background-image: linear-gradient(to right, orange, tomato);
}

.playlist .song:hover  {
  color: red;
}
</style>
