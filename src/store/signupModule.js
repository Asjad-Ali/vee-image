import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)


export default{
  namespaced:true,
  state:{
    signResponse:[]
  },
  mutations: {
    signupRes(state,data){
      state.signResponse=data
    }
  },
  actions: {
    signup({commit},payload){
      
      console.log(payload)
      axios
        .post("http://192.168.88.224:8000/user/signup", payload)
        .then((res) => {
          console.log("Response");
          console.log(res.data);
          commit('signupRes',res)
          alert(res.data.message)
        })
        .catch(errors => {
          console.log(errors)
        });
    }
  },
  getters:{
    getResponse(state){
      return state.signResponse
    }
  }
}