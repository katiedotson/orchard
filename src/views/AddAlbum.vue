<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <form enctype="multipart/form-data">
        <div class="page-title">Add new album</div>
        <hr>
        <label for="album-title">Album title</label>
        <input type="text" name="album-title" v-model="album_title">
        <label for="album-artist">Album artist</label>
        <input type="text" name="album-artist" v-model="album_artist">
        <label for="album-description">Album description</label>
        <textarea
          name="album-description"
          placeholder="Album description..."
          v-model="album_description"
        ></textarea>
        <label for="cover-upload">Upload cover</label>
        <input type="file" ref="album_cover" v-on:change="newAlbumCover">
        <label for="album-label">Album label</label>
        <select name="album-label"></select>
        <label for="album_releaseDate">Release date</label>
        <input type="date" name="release-date" v-model="release_date">
        <div class="submit-new-album" v-on:click="submit">Submit</div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  created() {},
  beforeMount() {
    this.$store.dispatch("clearAlbumData");
  },
  computed: {
    album_title: {
      get() {
        return this.$store.state.new_album.album_title;
      },
      set(value) {
        this.$store.commit("newAlbumTitle", value);
      }
    },
    album_artist: {
      get() {
        return this.$store.state.new_album.album_artist;
      },
      set(value) {
        this.$store.commit("newAlbumArtist", value);
      }
    },
    album_description: {
      get() {
        return this.$store.state.new_album.album_description;
      },
      set(value) {
        this.$store.commit("newAlbumDescription", value);
      }
    },
    album_cover: {
      get() {
        return this.$store.state.new_album.album_cover;
      },
      set(value) {
        this.$store.commit("newAlbumCover", value);
      }
    },
    album_label: {
      get() {
        return this.$store.state.album_data.album_label;
      },
      set(value) {
        this.$store.commit("newAlbumLabel", value);
      }
    },
    release_date: {
      get() {
        this.$store.state.album_data.release_date;
      },
      set(value) {
        this.$store.commit("newReleaseDate", value);
      }
    }
  },
  methods: {
    newAlbumCover() {
      this.$store.commit("newAlbumCover", this.$refs.album_cover.files[0]);
    },
    submit() {
      this.$store.dispatch("saveNewAlbum");
    }
  },
  components: {}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  margin-top: 60px;
  margin-left: 25px;
  margin-right: 25px;
}
.page-title {
  font-family: "Playfair Display", serif;
  font-size: 1.8em;
  font-weight: bold;
}
hr {
  border: 0;
  height: 0;
  border-bottom: 1px solid #aaa;
}
label {
  font-family: "Lato", sans-serif;
  font-size: 1.2em;
  padding-left: 8px;
  margin-top: 12px;
  display: block;
}
input[type="text"],
input[type="file"],
input[type="date"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
input[type="file"]:hover {
  cursor: pointer;
  background-color: rgba(230, 230, 230, 0.5);
}
textarea {
  height: 200px;
  border: 1px solid #aaa;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 200px;
  font-family: "Lato", sans-serif;
}
.submit-new-album {
  color: white;
  background-color: rgb(121, 61, 61);
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-family: "Playfair Display", serif;
}
.submit-new-album:hover {
  cursor: pointer;
  background-color: rgb(151, 61, 61);
}
</style>

