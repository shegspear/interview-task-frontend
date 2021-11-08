import { createStore } from 'vuex'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const apiClient = axios.create({
  baseURL: 'https://whispering-river-10775.herokuapp.com/'
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default createStore({
  state: {
    loading: false,
    filter: null
  },
  mutations: {
    toggleLoader (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
