import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import signupModule from './signupModule'
import loginModule from './loginmodule'

Vue.use(axios)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signupModule,
    loginModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
  
})
