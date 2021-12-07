import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)


export default{
  namespaced:true,
  state:{
    user:[]
  },
  mutations: {
    signup(state,data){
      state.user=data
    }
  },
  actions: {
    signup({commit},payload){
      commit('signup',payload)
      // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      // axios
      //   .post("http://192.168.88.224:8080/user/signup", user)
      //   .then((res) => {
      //     console.log(res);
      //   });
    }
  },
  getters:{

  }
}