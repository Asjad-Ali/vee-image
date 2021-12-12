import axios from 'axios'


export default{
  namespaced:true,
  state:{
    
    loginResponse:[]
  },
  mutations: {
    loginRes(state,data){
      state.loginResponse=data
    }
  },
  actions: {
    login({commit},payload){
      axios
        .post("https://imagesharelink.herokuapp.com/api/login",payload)
        .then((res) => {
          commit('loginRes',res.data)
          localStorage.setItem("Token",JSON.stringify(res.data.Token))
          console.log("Login response",res.data);
          open("/Home","_self")
        }).catch(error => {
          console.log("Login catch error",error.data)
        });
    }
  },
  getters:{
    getResponse(state){
      return state.signResponse
    }
  }
}