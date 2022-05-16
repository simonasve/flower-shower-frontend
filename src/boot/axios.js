import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios


const api = axios.create({ baseURL: 'https://localhost:7122/API' })
Vue.prototype.$api = api

export { axios, api }