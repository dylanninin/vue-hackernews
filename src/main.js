import Vue from 'vue'
import App from './App'
import router from './router'

// Create the app instance
// here we inject the router to all child components,
// making them available everywhere as `this.$router`.
const app = new Vue(Vue.util.extend({
  router
}, App))

// Actually mount to DOM
app.$mount('#app')
