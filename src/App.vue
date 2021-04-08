<template>
  <div id="app">
    <div class="my-container">
      <h1 class="my-title">Baify</h1>
      <h3 class="my-subtitle">Select a playlist</h3>
      <div class="my-img-container">
        <img
          data-tilt
          v-for="song in songs"
          :key="song.src"
          :src="song.img"
          @click="play(song)"
          alt=""
          class="img-name image"
          :class="song.src == current.src ? 'song playing' : 'song'"
        />
      </div>

      <div class="player">
        <div class="current-ta">
          {{ current.playlist }} <br />
          {{ current.title }} - {{ current.artist }}
        </div>
        <div class="controls">
          <div>
            <button class="prev button is-ghost" @click="prev" size="is-medium">
              <b-icon pack="fas" icon="backward" size="is-small"></b-icon>
            </button>
            <button
              class="play button is-ghost"
              v-if="!isPlaying"
              @click="play"
              type="is-dark"
              size="is-medium"
            >
              <b-icon pack="fas" icon="play" size="is-small"></b-icon>
            </button>
            <button
              class="pause button is-ghost"
              v-else
              @click="pause"
              type="is-dark"
              size="is-medium"
            >
              <b-icon pack="fas" icon="pause" size="is-small"></b-icon>
            </button>
            <button
              class="next button is-ghost"
              @click="next"
              type="is-dark"
              size="is-medium"
            >
              <b-icon pack="fas" icon="forward" size="is-small"></b-icon>
            </button>
          </div>
        </div>

        <div class="slidercontainer">
          <div class="volume-icon">
            <b-icon pack="fas" icon="volume-down"></b-icon>
          </div>
          <div class="volume-slider"><b-slider
            type="is-primary"
            :value="0"
          ></b-slider></div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          playlist: "Relax",
          title: "Night Light",
          artist: "СОЛОВЬЕВ АНДРЕЙ",
          src: require("./assets/music/Relax/relax.mp3"),
          img: require("./assets/images/relax.jpg"),
        },
        {
          playlist: "Workout",
          title: "Nviltorus",
          artist: "MAJED SALIH",
          src: require("./assets/music/Workout/workout.mp3"),
          img: require("./assets/images/work.jpg"),
        },
        {
          playlist: "Chill",
          title: "Chillout me",
          artist: "ANTONY RAIJEKOV",
          src: require("./assets/music/Chill/Chill.mp3"),
          img: require("./assets/images/chill.png"),
        },
        {
          playlist: "Piano",
          title: "Stories from Emona ",
          artist: "MAYA FILIPIČ",
          src: require("./assets/music/Piano/piano.mp3"),
          img: require("./assets/images/piano.jpg"),
        },
        {
          playlist: "LoFi",
          title: "Add",
          artist: "Youtube - Lee",
          src: require("./assets/music/LoFi/lofi.mp3"),
          img: require("./assets/images/lofi.png"),
        },
        {
          playlist: "Rock",
          title: "Presage",
          artist: "COLOR OUT",
          src: require("./assets/music/Rock/rock.mp3"),
          img: require("./assets/images/rock.jpg"),
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;

        this.player.src = this.current.src;
      }

      this.player.play();
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
      this.player.pause();
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

      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.song[this.index];
    this.player.src = this.current.src;
  },
};
</script>
<style>
@import "styles/styles.css";
</style>

