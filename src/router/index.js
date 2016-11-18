import Vue from 'vue'
import Router from 'vue-router'

// Use router plugin
Vue.use(Router)

// Import route components
import Hello from '../components/Hello'
import ItemList from '../components/ItemList'
import ItemView from '../views/ItemView'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  // Define routes
  routes: [
    { path: '/top', component: ItemList },
    { path: '/new', component: Hello },
    { path: '/show', component: Hello },
    { path: '/ask', component: Hello },
    { path: '/job', component: Hello },
    { path: '/item/:id(\\d+)', component: ItemView },
    { path: '/user', component: Hello },
    { path: '/', redirect: '/top' }
  ]
})
