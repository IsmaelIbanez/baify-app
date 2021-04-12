import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      song: {
          id: Number,
          title: String,
          author: String,
          genre: String,
          audio: Audio
      },
      songs: [],
      playlist:[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
