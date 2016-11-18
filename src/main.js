import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'

// sync the router with the vuex store
// this registers `store.state.route`
sync(store, router)

// Register global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Create the app instance
// here we inject the router to all child components,
// making them available everywhere as `this.$router`.
const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

// Actually mount to DOM
app.$mount('#app')
