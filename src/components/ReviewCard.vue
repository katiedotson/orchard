<template>
  <div class="review-card">
    <div class="review-title">{{title}}&nbsp;&nbsp;|</div>
    <div class="score">&nbsp;&nbsp;{{score}}</div>
    <div class="username" v-on:click="viewUser">{{username}}</div>
    <div class="review-body">{{review_body}}</div>
    <hr>
  </div>
</template>

<script>
import router from "../router";
export default {
  props: {
    id: String,
    title: String,
    review_body: String,
    album_id: String,
    username: String,
    score: Number
  },
  computed: {},
  methods: {
    viewUser: function() {
      let this_id = this.username;
      router.push({ name: 'user', params: { id: this_id } });
    }
  }
};
</script>
<style scoped>
.review-title {
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  float: left;
}
.username {
  font-family: "Playfair Display", serif;
  font-size: 0.8em;
  clear: both;
  font-style: italic;
}
.username:hover{
  cursor: pointer;
}
.score {
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 1.2em;
}
.review-body {
  font-family: "Lato", sans-serif;
  margin-top: 4px;
}
hr {
  border: 0;
  height: 0;
  border-bottom: 1px solid #aaa;
}
</style>
