<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <div class="about-heading">
        About Us
      </div>
      <hr>
      <div class="about-body">
        Here at <i>orchard</i>, we believe the best music is far too often buried beneath the static of our daily lives. That's why we're trying to make it easier than ever for independent musicians to bring their music to an audience, and for fans like us to express our love of it. 
        <br><br>You can use <i>orchard</i> to:
        <ul>
          <li>discover new music</li>
          <li>share your own music</li>
          <li>see what people are saying about the newest releases</li>
        </ul>
        <br>If you have any questions, comments, suggestions, or concerns, we'd be happy to hear them at: -------. We'll do our best to reply. In the mean time, happy discovery!
      </div>
      <hr>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.container {
  margin-top: 60px;
  margin-left: 25px;
  margin-right: 25px;
}
hr {
  border: 0;
  height: 0;
  border-bottom: 1px solid #aaa;
}
.about-heading{
    clear: both;
  font-family: "Playfair Display", serif;
  font-size: 1.2em;
  font-weight: bold;
}
.about-body{
  font-family: "Lato", serif;
  font-size: 1em;
  line-height: 1.6;
}
</style>

