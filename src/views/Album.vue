<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <img
        class="img-lrg"
        v-bind:src="getAlbumCover"
        v-if="album_cover"
      >
      <div class="album-title">{{album_title}}</div>
      <div class="album-favorite">
        <i class="material-icons">add_circle</i>
      </div>
      <div class="album-artist">{{album_artist}}</div>
      <div id="quick-links-container">
        <div class="quick-link">Artist</div>
        <div class="quick-link">Listen</div>
        <!-- <div class="quick-link">Favorite</div> -->
        <div class="quick-link" id="quick-link-last">Share</div>
      </div>
      <hr>
      <div class="album-description">{{album_description}}</div>
      <hr>
      <div v-if="reviews">
        <div class="reviews-heading">Reviews</div>
        <hr>
        <ReviewCard
          v-for="review in reviews"
          v-bind:key="review.id"
          v-bind:title="review.title"
          v-bind:review_body="review.review_body"
          v-bind:album_id="review.album_id"
          v-bind:username="review.username"
          v-bind:score="review.score"
          v-bind:user_id="review.user_id"
        />
      </div>
      <div class="label">Write a review:</div>
      <textarea placeholder="..."></textarea>
      <div class="write-a-review-submit">Submit</div>
      <div class="related-container" v-if="related">
        <div class="related-heading">Related</div>
        <hr>
        <SmallCard
          v-for="related_album in related"
          v-bind:key="related_album.id"
          v-bind:title="related_album.title"
          v-bind:album_id="related_album.album_id"
          v-bind:album_cover="related_album.album_cover"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue";
import SmallCard from "@/components/SmallAlbumCard.vue";
import Vuex from "vuex";
export default {
  data: function() {
    return {};
  },
  computed: {
    getAlbumCover: function() {
      return require("@/assets/img/album_covers/" + this.album_cover);
    },
    album_title: function() {
      return this.$store.state.album_data.album_title;
    },
    album_artist: function() {
      return this.$store.state.album_data.album_artist;
    },
    album_cover: function() {
      return this.$store.state.album_data.album_cover;
    },
    album_description: function() {
      return this.$store.state.album_data.album_description;
    },
    reviews: function() {
      return this.$store.state.album_data.reviews;
    },
    related: function() {
      return this.$store.state.album_data.related;
    }
  },
  components: {
    ReviewCard,
    SmallCard
  },
  beforeMount() {
    this.$store.dispatch("loadAlbumData", this.$route.params.album_title);
  },
  methods: {}
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
  max-width: 800px;
}
.album-title {
  font-family: "Playfair Display", serif;
  font-size: 1.8em;
  font-weight: bold;
  display: inline;
}
.album-favorite {
  float: right;
  padding-top: 12px;
  color: rgb(121, 61, 61);
}
.album-artist {
  font-family: "Playfair Display", serif;
  font-size: 1em;
  font-style: italic;
}
#quick-links-container {
  text-align: center;
  margin-top: 8px;
}
.quick-link {
  display: inline;
  font-family: "Playfair Display", serif;
  font-size: 0.8em;
  margin-right: 8px;
  padding-right: 8px;
  border-right: 1px solid black;
}
#quick-link-last {
  border: none !important;
}
hr {
  border: 0;
  height: 0;
  border-bottom: 1px solid #aaa;
}
.img-lrg {
  width: 260px;
  height: 260px;
  display: block;
  margin: 0 auto;
  margin-top: 68px;
  margin-bottom: 12px;
  box-shadow: 4px 4px 24px #aaa;
}
.album-description {
  font-family: "Lato", sans-serif;
  font-size: 1em;
}
.reviews-heading {
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
}
.label {
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
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
.write-a-review-submit {
  padding: 8px;
  background-color: rgb(121, 61, 61);
  color: #fff;
  border-radius: 4px;
  /* width: 56px; */
  text-align: center;
  float: right;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: "Playfair Display", serif;
}
.write-a-review-submit:hover {
  background-color: rgb(90, 61, 61);
  cursor: pointer;
}
.related-heading {
  clear: both;
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
}
.related-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
