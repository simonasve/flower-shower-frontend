import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios


const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const api = axios.create({ baseURL: 'https://localhost:7122/API', headers: config.headers })
Vue.prototype.$api = api

export { axios, api, config }