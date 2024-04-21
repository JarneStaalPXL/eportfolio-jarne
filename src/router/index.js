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
  },
  {
    path: '/overzicht-activiteiten',
    name: 'activities',
    component: () => import(/* webpackChunkName: "activities" */ '../views/OverviewActivities.vue')
  },
  {
    path: '/selectie-activiteiten',
    name: 'selection',
    component: () => import(/* webpackChunkName: "selection" */ '../views/SelectedActivitiesView.vue')
  },
  {
    path: '/eindreflectie',
    name: 'reflection',
    component: () => import(/* webpackChunkName: "reflection" */ '../views/FinalReflectionView.vue')
  },
  {
    path: '/rapporten',
    name: 'reports',
    component: () => import(/* webpackChunkName: "reports" */ '../views/ReportView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
