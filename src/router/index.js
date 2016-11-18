import Vue from 'vue'
import Router from 'vue-router'

// Use router plugin
Vue.use(Router)

// Import route components
import ItemList from '../components/ItemList'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  // Define routes
  routes: [
    { path: '/top/:page(\\d+)?', component: ItemList },
    { path: '/new/:page(\\d+)?', component: ItemList },
    { path: '/show/:page(\\d+)?', component: ItemList },
    { path: '/ask/:page(\\d+)?', component: ItemList },
    { path: '/job/:page(\\d+)?', component: ItemList },
    { path: '/item/:id(\\d+)', component: ItemView },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/top' }
  ]
})
