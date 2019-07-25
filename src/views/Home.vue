<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <Card
        v-for="card in cards"
        v-bind:key="card._id"
        v-bind:title="card.album_title"
        v-bind:description="card.album_description"
        v-bind:album_cover="card.album_cover"
        v-bind:album_id="card.album_id"
        v-bind:album_artist="card.album_artist"
      />
    </div>
  </transition>
</template>

<script>
import Card from "@/components/LargeAlbumCard.vue";
export default {
  data: function() {
    return {};
  },
  created() {},
  beforeMount() {
    this.$store.dispatch("loadHomeData");
  },
  computed: {
    cards() {
      return this.$store.state.home_data.cards;
    }
  },
  methods: {},
  components: {
    Card
  }
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
  display: grid;
  grid-template-columns: auto auto;
}
@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: auto;
  }
}

@media screen and (min-width: 900px) {
  .container {
    grid-template-columns: auto auto auto;
  }
}
</style>

