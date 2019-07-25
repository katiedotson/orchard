<template>
  <div class="small-card" v-on:click="viewAlbum" v-if="album_cover">
    <img class="img-ex-small" v-bind:src="getAlbumCover">
    <div class="title">{{title}}</div>
    <div class="artist">{{album_artist}}</div>
  </div>
</template>

<script>
import router from "../router";
export default {
  props: {
    id: String,
    title: String,
    description: String,
    album_cover: String,
    album_artist: String,
    album_id: String
  },
  computed: {
    getAlbumCover: function() {
      return require("@/assets/img/" + this.album_cover);
    }
  },
  methods: {
    viewAlbum: function() {
      router.push({ name: "album", params: { title: this.album_title } });
    }
  }
};
</script>

<style>
.title {
  color: #000;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 0.8em;
  text-align: center;
}
.title:hover {
  cursor: pointer;
}
.img-ex-small {
  height: 60px;
  width: 60px;
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
}
.small-card {
  border-radius: 4px;
  padding: 8px;
  /* width: 200px; */
  /* height: 100px; */
}
</style>

