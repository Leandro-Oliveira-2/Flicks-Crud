// src/globals.js
import store from '@/store';

export function redirectToCineScreen({ router, movieId }) {
  store.commit('setSelectedMovieUrl', movieId)
  router.push({ name: 'cineScreen' })
}

export { store };
