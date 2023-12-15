import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/training',
    name: 'training',
    component: () => import(/* webpackChunkName: "training" */ '../pages/TrainingView.vue'),
  },
  {
    path: '/series',
    name: 'SeriesPage',
    component: () => import(/* webpackChunkName: "series" */ '../pages/SeriesPage.vue'),
  },
  {
    path: '/movies',
    name: 'MoviesPage',
    component: () => import(/* webpackChunkName: "movies" */ '../pages/MoviesPage.vue'),
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "loginPage" */ '../pages/LoginPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
