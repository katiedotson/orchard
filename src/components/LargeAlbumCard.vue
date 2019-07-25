<template>
  <div class="card" v-on:click="viewAlbum">
    <img class="img-small" v-bind:src="getAlbumCover" v-if="album_cover">
    <div class="title">{{title}}</div>
    <div class="title">{{album_artist}}</div>
    <div class="p-small">{{description}}</div>
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
    album_id: String,
    album_artist: String
  },
  computed: {
    getAlbumCover: function() {
      return require("@/assets/img/album_covers/" + this.album_cover);
    }
  },
  methods: {
    viewAlbum: function() {
      router.push({
        name: "album",
        params: { album_title: this.title }
      });
    }
  }
};
</script>

<style scoped>
.p-small {
  color: #000;
  text-overflow: ellipsis;
  margin: 0;
  padding: 8px;
  clear: both;
  font-family: "Lato", sans-serif;
}
.title {
  color: #000;
  width: 100%;
  min-width: 100px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
}
.title:hover {
  cursor: pointer;
}
.card {
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition-duration: 250ms;
}
.card:hover {
  cursor: pointer;
  /* background: rgb(230, 230, 230, 0.5); */
}
.img-small {
  height: 120px;
  width: 120px;
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  box-shadow: 4px 4px 16px #ddd;
}
.after-img-small {
  margin-top: 44px;
}
</style>

