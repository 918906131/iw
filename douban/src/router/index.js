import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/register',
    component: () => import( /* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/book_audio',
    component: () => import( /* webpackChunkName: "about" */ '../views/book_audio.vue'),
    children: [{
        path: 'mov',
        component: () => import( /* webpackChunkName: "about" */ './../views/audio_files/mov.vue')
      },
      {
        path: '/',
        redirect: '/book_audio/mov'
      },
      {
        path: 'read_book',
        component: () => import( /* webpackChunkName: "about" */ './../views/audio_files/read_book.vue')
      },
      {
        path: 'TV',
        component: () => import( /* webpackChunkName: "about" */ './../views/audio_files/TV.vue')
      },
      {
        path: 'same_city',
        component: () => import( /* webpackChunkName: "about" */ './../views/audio_files/same_city.vue')
      },
      {
        path: 'music',
        component: () => import( /* webpackChunkName: "about" */ './../views/audio_files/music.vue')
      },
    ]
  },
  {
    path: '/status',
    component: () => import( /* webpackChunkName: "about" */ '../views/status.vue')
  },
  {
    path: '/group',
    component: () => import( /* webpackChunkName: "about" */ '../views/group.vue')
  },
  {
    path: '/mine',
    component: () => import( /* webpackChunkName: "about" */ '../views/mine.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router