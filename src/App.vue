<template>
  <div id="app">
    <div class="header">
        <div class="inner">
          <router-link to="/" exact>
            <img class="logo" src="~public/logo-48.png" alt="logo" />
          </router-link>
          <router-link to="/top">Top</router-link>
          <router-link to="/new">New</router-link>
          <router-link to="/show">Show</router-link>
          <router-link to="/ask">Ask</router-link>
          <router-link to="/job">Job</router-link>
          <a class="github" href="#" target="_blank">
              Built with Vue.js
          </a>
        </div>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
