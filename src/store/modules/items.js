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
    api.get(`/User/${userId}/Order`)
      .then(response => {
        if (response.status === 200) {
          commit('setOrder', response.data)
        }
      })
  },
  submitOrder ({}, payload) {
    return api.post('/Order/startOrder', payload, config)
      .then(response => {
        if (response.status === 200) {
          commit('setOrder', {})
          return response.data
        }
      })
      .catch(err => err)
  },
  addItem ({ dispatch }, data) {
    return api.post(`/User/${data.userId}/OrderItem/${data.productId}?quantity=${data.quantity}`)
      .then(response => {
        if (response.status === 200) {
          dispatch('loadOrder', data.userId)
          return response.data
        }
      })
      .catch(err => err)
  },
  removeItem ({ dispatch }, data) {
    return api.delete(`/User/${data.userId}/OrderItem/${data.productId}`)
      .then(response => {
        if (response.status === 200) {
          dispatch('loadOrder', data.userId)
          return response.data
        }
      })
      .catch(err => err)
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
