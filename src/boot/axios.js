import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios


const api = axios.create({ baseURL: 'https://localhost:8080' }) //Chnage to backend base URL
Vue.prototype.$api = api

export { axios, api }