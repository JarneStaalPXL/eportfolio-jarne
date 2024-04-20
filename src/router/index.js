import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/over-mij',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMeView.vue')
  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
