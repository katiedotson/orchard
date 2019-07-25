<template>
  <div id="app">
    <div>
      <h1 class="h1 zero-auto">site name</h1>
      <div id="menu-icon" v-on:click="toggleMenu">
        <i class="material-icons">menu</i>
      </div>
      <transition name="fade" mode="out-in">
        <div id="menu" v-show="!menuIsHidden">
          <div v-on:click="toggleMenu">
            <router-link to="/">
              Home
              <i class="material-icons menu-alert-icon" v-if="home_alert">star</i>
            </router-link>
          </div>
          <div v-on:click="toggleMenu">
            <router-link to="/about">
              About
              <i class="material-icons menu-alert-icon" v-if="about_alert">star</i>
            </router-link>
          </div>
          <div v-on:click="toggleMenu">
            <router-link to="/add-album">
              Add Album
              <i class="material-icons menu-alert-icon">star</i>
            </router-link>
          </div>
        </div>
      </transition>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      menuIsHidden: true,
      about_alert: true,
      home_alert: false
    };
  },
  computed: {},
  methods: {
    toggleMenu: function() {
      this.menuIsHidden = !this.menuIsHidden;
    }
  }
};
</script>

<style>
body {
  background-color: #eee !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.h1 {
  font-family: "Playfair Display", serif;
  color: rgba(255, 255, 255);
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  padding: 4px 8px;
  width: 100%;
  height: 42px;
  background-color: rgb(121, 61, 61);
  border-bottom: 1px solid #000;
}
.zero-auto {
  margin: 0 auto;
}
.menu-alert-icon {
  font-size: 0.5em;
  float: right;
  position: relative;
  top: 6px;
}
#menu-icon {
  position: fixed;
  top: 0px;
  right: 0px;
  margin-top: 12px;
  margin-right: 12px;
  color: rgba(255, 255, 255, 0.527);
}
#menu-icon:hover{
  cursor: pointer;
}
#menu {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(121, 61, 61, 0.50);
  margin-top: 50px;
  z-index: 2;
  overflow: hidden;
}
#menu a {
  display: block;
  text-align: left;
  margin: 0 auto;
  color: white;
  text-decoration: none;
  font-family: "Playfair Display", serif;
  padding: 16px;
  border-bottom: 1px solid rgba(121, 61, 61, 0.5);
  z-index: 1;
}
#menu a:hover{
  background-color: rgb(121, 61, 61, .750);
}
a.router-link-exact-active {
  background-color: rgba(121, 61, 61, 0.5);
  font-weight: bold;
}
</style>
