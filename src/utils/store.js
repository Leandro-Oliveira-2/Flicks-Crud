// src/store.js
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
  actions: {
    // Registre a função como uma ação
    redirectToCineScreen: ({ commit }, { router, movieId }) => {
      commit('setSelectedMovieUrl', movieId)
      router.push({ name: 'cineScreen' })
    },
    redirectdirect: ({ commit }, { router, movieId }) => {
      commit('link', movieId)
      router.push({ name: 'cineScreen' })
    },
  },
})
