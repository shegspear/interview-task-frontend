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
    personelArr: [],
    pointer: 'Hello'
  },
  mutations: {
    appendPersonel (state, payload) {
      state.personelArr = [...payload]
      // console.log('state:>> ', ...state.personelArr)
    }
  },
  actions: {
    async getPersonel (context) {
      const data = await apiClient.get('/api/personels')
      const res = data.data
      context.commit('appendPersonel', res)
    }
  },
  modules: {
  }
})
