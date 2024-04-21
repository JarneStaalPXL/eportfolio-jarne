import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  },
  {
    path: '/over-mij',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMeView.vue'),
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  },
  {
    path: '/overzicht-activiteiten',
    name: 'activities',
    component: () => import(/* webpackChunkName: "activities" */ '../views/OverviewActivities.vue'),
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  },
  {
    path: '/selectie-activiteiten',
    name: 'selection',
    component: () => import(/* webpackChunkName: "selection" */ '../views/SelectedActivitiesView.vue'),
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  },
  {
    path: '/eindreflectie',
    name: 'reflection',
    component: () => import(/* webpackChunkName: "reflection" */ '../views/FinalReflectionView.vue'),
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  },
  {
    path: '/rapporten',
    name: 'reports',
    component: () => import(/* webpackChunkName: "reports" */ '../views/ReportView.vue'),
    beforeEnter: (to, from, next) => {
      store.commit('setSidebarOpen', false);
      console.log('Sidebar is now closed.');
      next();
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router

