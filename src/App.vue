<template>
  <div id="app">
    <section class="container">
    <div class="hero-body">
      <header>
        <h1 class="is-size-1">Baify - Player</h1>
      </header>
      <main>
        <div class="big-container">
          
            <section class="player">
              <h2 class="song-title">{{current.title}} - <span>{{ current.artist }}</span></h2>
              <div class="control">
                <b-button class="prev" @click="prev" type="is-dark" size="is-large"><b-icon pack="fas" icon="backward" size="is-small"></b-icon></b-button>
                <b-button class="play" v-if="!isPlaying" @click="play" type="is-dark" size="is-large"> <b-icon pack="fas" icon="play" size="is-small"></b-icon></b-button>
                <b-button class="pause" v-else @click="pause" type="is-dark" size="is-large">Pause</b-button>
                <b-button class="next" @click="next" type="is-dark" size="is-large"><b-icon pack="fas" icon="forward" size="is-small"></b-icon></b-button>
              </div>
            </section>

          <section class="playlist">
            <h3>Playlist</h3>
            <!-- <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ?  'song playing' : 'song'">
              {{ song.title}} - {{song.artist}}
            </button> -->
            <figure class="image">
              <!-- <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ?  'song playing' : 'song'">
                {{ song.title}} - {{song.artist}}
              </button> -->
              <img v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ?  'song playing' : 'song'" :src="(song.img)" alt="">
            </figure>
          </section>


        </div>
        
        
        
      </main>
    </div>
    </section>
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

.big-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
}

button {
  margin: 10px;
}
.image{
  width: 300px;
}

.playlist-title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 56px;
    font-family: 'Roboto', sans-serif;
    color: white;
}

.player-container {
  display: flex;
  flex-direction: row;
}
</style>
