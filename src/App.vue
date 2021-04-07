<template>
  <div id="app">
        <div class="my-container">
          <h1 class="my-title">Baify</h1>
          <h3 class="my-subtitle">Select a playlist</h3>
          <div class="my-img-container">
            <img data-tilt v-for="song in songs" :key="song.src" :src="(song.img)"  @click="play(song)" alt="" class="img-name image" :class="(song.src == current.src) ?  'song playing' : 'song'">
          </div>
          

          <div class="current">
                <p class="current-ta">{{ current.playlist }} <br> {{ current.title }} - {{ current.artist }}</p>
                <div class="controls">
                  <button class="prev button is-ghost" @click="prev" size="is-medium"><b-icon pack="fas" icon="backward" size="is-small"></b-icon></button>
                  <button class="play button  is-ghost" v-if="!isPlaying" @click="play" type="is-dark" size="is-medium"> <b-icon pack="fas" icon="play" size="is-small"></b-icon></button>
                  <button class="pause button is-ghost" v-else @click="pause" type="is-dark" size="is-medium"><b-icon pack="fas" icon="pause" size="is-small"></b-icon></button>
                  <button class="next button is-ghost" @click="next" type="is-dark" size="is-medium"><b-icon pack="fas" icon="forward" size="is-small"></b-icon></button>
                </div>
          </div>

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
          playlist: 'Relax',
          title: 'Night Light',
          artist: 'СОЛОВЬЕВ АНДРЕЙ',
          src: require('./assets/music/Relax/relax.mp3'),
          img: require('./assets/images/relax.jpg')
        },
        {
          playlist: 'Workout',
          title: 'Nviltorus',
          artist: 'MAJED SALIH',
          src: require('./assets/music/Workout/workout.mp3'),
          img: require('./assets/images/work.jpg')
        },
        {
          playlist: 'Chill',
          title: 'Chillout me',
          artist: 'ANTONY RAIJEKOV',
          src: require('./assets/music/Chill/Chill.mp3'),
          img: require('./assets/images/chill.png')
        },
        {
          playlist: 'Piano',
          title: 'Stories from Emona ',
          artist: 'MAYA FILIPIČ',
          src: require('./assets/music/Piano/piano.mp3'),
          img: require('./assets/images/piano.jpg')
        },
        {
          playlist: 'LoFi',
          title: 'Add',
          artist: 'Youtube - Lee',
          src: require('./assets/music/LoFi/lofi.mp3'),
          img: require('./assets/images/lofi.png')
        },
        {
          playlist: 'Rock',
          title: 'Presage',
          artist: 'COLOR OUT',
          src: require('./assets/music/Rock/rock.mp3'),
          img: require('./assets/images/rock.jpg')
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
html, body {
  margin: 0;
}
.my-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: black;

  height: 100%;
  width: 100%;
  position: absolute;
  
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;

}
.current {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 

  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 100px;
  padding: 0 20px 0 10px;
  text-align: center;
}

/* Start Playlist Design  */
.my-img-container {
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
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  opacity: 55%;
  transition: opacity 0.75s;
}
img:hover {
  opacity: 1;
}
/* END Playlist Design */
.current-ta {
  color: whitesmoke;
  font-size: 1.2em;
  width: 400px;
}

.my-title {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 900;
  color: whitesmoke;
  text-shadow: 1px 1px 10px white;
}
.my-subtitle {
  font-size: 1.5em;
  font-weight: 600;
}

button:hover {
  opacity: 70%;
}

button {
  margin: 5px;
}

</style>
