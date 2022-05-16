import Vue from 'vue'
import { api } from 'boot/axios'

const state = {
  roses: []
}

const mutations = {
  setRoses (state, payload) {
    Vue.set(state, 'roses', payload)
  }
}

const actions = {
  loadRoses ({ commit }) {
    api.get('/Product/Roses')
      .then((response) => {
        if (response.status === 200) {
          commit('setRoses', response.data)
        } else {
          commit('setRoses', [])
        }
      })
  }
}

const getters = {
  getRoses: state => state.roses
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
