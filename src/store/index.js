import { createStore } from 'vuex'

export default createStore({
  state: {
    currentRouteName: 'Home',
    sidebarOpen: false
  },
  getters: {
  },
  mutations: {
    setCurrentRouteName(state, name) {
      state.currentRouteName = name
    },
    setSidebarOpen(state, value) {
      state.sidebarOpen = value
    }
  },
  actions: {
  },
  modules: {
  }
})
