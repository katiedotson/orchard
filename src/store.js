import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';
import router from './router';

export default new Vuex.Store({
  state: {
    album_data: {},
    home_data: {},
    user_data: {},
    new_album: {
      album_title: '',
      album_artist: '',
      album_description: '',
      album_cover: '',
      release_date: '',
    },
  },
  mutations: {
    updateAlbum(state, album) {
      this.state.album_data = album;
    },
    updateHome(state, home_data) {
      this.state.home_data = home_data;
    },
    updateUserData(state, user) {
      this.state.user_data = user;
    },
    newAlbumTitle(state, data) {
      this.state.new_album.album_title = data;
    },
    newAlbumArtist(state, data) {
      this.state.new_album.album_artist = data;
    },
    newAlbumDescription(state, data) {
      this.state.new_album.album_description = data;
    },
    newAlbumCover(state, data) {
      this.state.new_album.album_cover = data;
    },
    newReleaseDate(state, data) {
      this.state.new_album.release_date = data;
    }
  },
  actions: {
    loadAlbumData({ commit }, album_title) {
      axios.get('http://localhost:3000/album/' + album_title).then(response => {
        commit('updateAlbum', response.data);
      });
    },
    clearAlbumData() {
      this.state.album = {}
    },
    loadHomeData({ commit }) {
      axios.get('http://localhost:3000/home').then(response => {
        commit('updateHome', response.data);
      });
    },
    loadUserData({ commit }, username) {
      axios.get('http://localhost:3000/user/' + username).then(response => {
        commit('updateUserData', response.data);
      });
    },
    saveNewAlbum() {
      let formData = new FormData();
      formData.set('album_title', this.state.new_album.album_title);
      formData.set('album_artist', this.state.new_album.album_artist);
      formData.set('album_description', this.state.new_album.album_description);
      formData.append('album_cover', this.state.new_album.album_cover);
      formData.set('release_date', new Date(this.state.new_album.release_date));
      let promise = axios({
        method: 'post',
        url: 'http://localhost:3000/saveNewAlbum',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      });
      promise.then(function (response) {
        router.push({ name: 'album', params: { album_title: response.data } });
      });
    }
  }
});
