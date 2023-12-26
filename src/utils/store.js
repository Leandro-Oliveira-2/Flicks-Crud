import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedMovieUrl: null,
  },
  mutations: {
    setSelectedMovieUrl(state, url) {
      state.selectedMovieUrl = url
    },
  },
})
