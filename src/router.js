import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Album from './views/Album.vue'
import About from './views/About.vue'
import User from './views/User.vue'
import AddAlbum from './views/AddAlbum.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/album/:album_title',
      name: 'album',
      component: Album
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/add-album',
      name: 'add-album',
      component: AddAlbum
    }
  ]
})
