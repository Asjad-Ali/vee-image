import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import signupModule from './signupModule'

Vue.use(axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    signupModule
  }
})
