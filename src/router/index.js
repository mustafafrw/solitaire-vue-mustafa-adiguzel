import Vue from 'vue'
import VueRouter from 'vue-router'
import Solitaire from '../views/Solitaire.vue'
import StartGame from '../views/StartGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'Solitaire',
    component: Solitaire
  },
  {
    path: '/',
    name: 'StartGame',
    component: StartGame
  },
]

const router = new VueRouter({
  routes
})

export default router
