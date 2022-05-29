import Vue from 'vue'
import { api, config } from 'boot/axios'

const state = {
  user: {},
}

const mutations = {
  setUser (state, payload) {
    Vue.set(state, 'user', payload)
  },
}

const actions = {
  login ({ commit }, data) {
    return api.post('/user/register', data, config)
      .then(response => {
        if (response.status === 200) {
          return commit('setUser', response.data)
        }
      })
  }
}

const getters = {
  getUser: state => state.user,
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
