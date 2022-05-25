import Vue from 'vue'
import { api } from 'boot/axios'

const state = {
  roses: [],
  bouquets: [],
  tulips: []
}

const mutations = {
  setRoses (state, payload) {
    Vue.set(state, 'roses', payload)
  },
  setBouquets (state, payload) {
    Vue.set(state, 'bouquets', payload)
  },
  setTulips (state, payload) {
    Vue.set(state, 'tulips', payload)
  }
}

const actions = {
  loadRoses ({ commit }) {
    api.get('/Product/Roses')
      .then(response => {
        if (response.status === 200) {
          commit('setRoses', response.data)
        } else {
          commit('setRoses', [])
        }
      })
  },
  loadBouquets ({ commit }) {
    api.get('/Product/Bouquets')
      .then(response => {
        if (response.status === 200) {
          commit('setBouquets', response.data)
        } else {
          commit('setBouquets', [])
        }
      })
  },
  loadTulips ({ commit }) {
    api.get('/Product/Tulips')
      .then(response => {
        if (response.status === 200) {
          commit('setTulips', response.data)
        } else {
          commit('setTulips', [])
        }
      })
  }
}

const getters = {
  getRoses: state => state.roses,
  getTulips: state => state.tulips,
  getBouquets: state => state.bouquets
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
