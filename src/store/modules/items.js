import Vue from 'vue'

const state = {
  currentItem: {},
  itemsInCart: []
}

const mutations = {
  setCurrentItem (state, payload) {
    Vue.set(state, 'currentItem', payload)
  },
  setItemsInCart (state, payload) {
    Vue.set(state, 'itemsInCart', payload)
  }
}

const actions = {
  setCurrentItem ({ commit }, payload) {
    commit('setCurrentItem', payload)
  },
  setItemsInCart ({ commit }, payload) {
    commit('setItemsInCart', payload)
  }
}

const getters = {
  getCurrentItem: state => state.currentItem,
  getItemsInCart: state => state.itemsInCart
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
