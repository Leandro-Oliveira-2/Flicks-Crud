import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movies from '../pages/MoviesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    name: 'AppLayout',
    component: () => import(/* webpackChunkName: "appLayout" */ '../components/AppLayout.vue'),
    children: [
      {
        path: '/movies',
        name: 'movies',
        component: Movies,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
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
        path: '/myList',
        name: 'MyListPage',
        component: () => import(/* webpackChunkName: "myList" */ '../pages/MyListPage.vue'),
      },
      {
        path: '/pumpingPage',
        name: 'PumpingPage',
        component: () => import(/* webpackChunkName: "pumpingPage" */ '../pages/PumpingPage.vue'),
      },
      {
        path: '/userProfile',
        name: 'UserProfile',
        component: () => import(/* webpackChunkName: "pumpingPage" */ '../pages/UserInfoPage.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/training',
    name: 'training',
    component: () => import(/* webpackChunkName: "training" */ '../pages/TrainingView.vue'),
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "loginPage" */ '../pages/LoginPage.vue'),
  },
  {
    path: '/registerPage',
    name: 'RegisterUser',
    component: () => import(/* webpackChunkName: "registerPage" */ '../pages/RegisterUser.vue'),
  },
  {
    path: '/account-screen',
    name: 'account-screen',
    component: () => import(/* webpackChunkName: "accountScreen" */ '../pages/AccountScreen.vue'),
  },
  {
    path: '/cineScreen',
    name: 'cineScreen',
    component: () => import(/* webpackChunkName: "cineScreen" */ '../pages/CineScreen.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
