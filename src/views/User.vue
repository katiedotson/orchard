<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <img class="img-small" v-bind:src="getUserPhoto" v-if="user_photo">
      <div class="username">{{username}}</div>
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
      />
      <div class="favorites-heading">Favorites</div>
      <hr>
      <div class="favorites-container">
        <SmallCard
          v-for="favorite in favorites"
          v-bind:key="favorite.album_id"
          v-bind:title="favorite.title"
          v-bind:album_id="favorite.album_id"
          v-bind:album_cover="favorite.album_cover"
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
    getUserPhoto: function() {
      return require("@/assets/img/" + this.user_photo);
    },
    user_photo: function() {
      return this.$store.state.user_data.user_photo;
    },
    username: function() {
      return this.$store.state.user_data.username;
    },
    reviews: function() {
      return this.$store.state.user_data.reviews;
    },
    favorites: function() {
      return this.$store.state.user_data.favorites;
    }
  },
  components: {
    ReviewCard,
    SmallCard
  },
  beforeMount() {
    this.$store.dispatch("loadUserData", this.$route.params.id);
  },
  methods: {}
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  margin-left: 25px;
  margin-right: 25px;
}
.img-small {
  width: 100px;
  height: 100px;
  float: left;
  margin: 0 auto;
  margin-bottom: 12px;
  box-shadow: 4px 4px 24px #aaa;
}
.username {
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-size: 1.8em;
  font-weight: bold;
  text-align: center;
  margin-left: 12px;
}
.reviews-heading {
  clear: both;
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
}
.favorites-heading {
  clear: both;
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
}
.favorites-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
}
hr {
  border: 0;
  height: 0;
  border-bottom: 1px solid #aaa;
}
</style>
