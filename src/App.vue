<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">

          <div class="img-container">
            <img v-for="song in songs" :key="song.src" :src="(song.img)"  @click="play(song)" alt="" class="img-name image" :class="(song.src == current.src) ?  'song playing' : 'song'">
          </div>

          <div class="current">
            <p class="title is-1">{{ current.title }}</p>
            <p class="subtitle"> by {{ current.artist }}</p>
            <div class="controls">
              <b-button class="prev" @click="prev" type="is-dark" size="is-large"><b-icon pack="fas" icon="backward" size="is-small"></b-icon></b-button>
              <b-button class="play" v-if="!isPlaying" @click="play" type="is-dark" size="is-large"> <b-icon pack="fas" icon="play" size="is-small"></b-icon></b-button>
              <b-button class="pause" v-else @click="pause" type="is-dark" size="is-large"><b-icon pack="fas" icon="pause" size="is-small"></b-icon></b-button>
              <b-button class="next" @click="next" type="is-dark" size="is-large"><b-icon pack="fas" icon="forward" size="is-small"></b-icon></b-button>
            </div>
          </div>

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
.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 500px;
}
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.current {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
}
/* Start Playlist Design  */
.img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  max-width: 950px;
}

img {
  width: 250px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}
img:hover {
  opacity: 60%;
}
/* END Playlist Design */
h1 {
  text-align: center;
  top: 10px
}
p {
  width: 500px;
  text-align: center;
}
</style>
