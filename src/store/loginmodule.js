import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

export default{
  namespaced:true,
  state:{
    loginResponse:[]
  },
  mutations: {
    loginRes(state,data){
      state.loginResponse=data
      console.log(data)
    }
  },
  actions: {
    login({commit},payload){
      
      axios
        .post("http://192.168.88.224:8000/user/login",payload)
        .then((res) => {
          console.log("login Response");
          let logindata=res.data
          console.log(logindata);
          commit('loginRes',logindata)
        })
        .catch(error => {
          console.log(error.res)
        });
    }
  },
  getters:{
    getResponse(state){
      return state.signResponse
    }
  }
}