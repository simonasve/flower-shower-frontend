import Vue from 'vue'
import { api, config } from 'boot/axios'

const state = {
  currentItem: {},
  order: {}
}

const mutations = {
  setCurrentItem (state, payload) {
    Vue.set(state, 'currentItem', payload)
  },
  setOrder (state, payload) {
    Vue.set(state, 'order', payload)
  }
}

const actions = {
  setCurrentItem ({ commit }, payload) {
    commit('setCurrentItem', payload)
  },
  loadOrder ({ commit }, userId) {
    config.headers.userId = userId

    api.get(`/User/${userId}/Order`, config)
      .then(response => {
        if (response.status === 200) {
          commit('setOrder', response.data)
        }
      })
  },
  submitOrder ({ commit }, payload) {
    return api.post('/Order/startOrder', payload, config)
      .then(response => {
        if (response.status === 200) {
          return commit('setOrder', {})
        }
      })
  },
  addItem ({ dispatch }, data) {
    config.headers.userId = data.userId

    return api.post(`/User/${data.userId}/OrderItem/${data.productId}?quantity=${data.quantity}`, config)
      .then(response => {
        if (response.status === 200) {
          dispatch('loadOrder', data.userId)
        }
      })
  },
  removeItem ({ dispatch }, data) {
    config.headers.userId = data.userId
    
    return api.delete(`/User/${data.userId}/OrderItem/${data.productId}`, config)
      .then(response => {
        if (response.status === 200) {
          dispatch('loadOrder', data.userId)
        }
      })
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
