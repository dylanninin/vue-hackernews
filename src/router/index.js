import Vue from 'vue'
import Router from 'vue-router'

// Use router plugin
Vue.use(Router)

// Import route components
import Hello from '../components/Hello'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  // Define routes
  routes: [
    { path: '/top', component: Hello },
    { path: '/new', component: Hello },
    { path: '/show', component: Hello },
    { path: '/ask', component: Hello },
    { path: '/job', component: Hello },
    { path: '/item', component: Hello },
    { path: '/user', component: Hello },
    { path: '/', redirect: '/top' }
  ]
})
