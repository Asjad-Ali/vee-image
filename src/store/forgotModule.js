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
    forgot({commit},payload){
      axios.post("https://imagesharelink.herokuapp.com/api/forget_password",payload)
        .then((res) => {
          let logindata=res.data
          console.log("forgot Response",logindata);
          commit('loginRes',logindata)
          
        })
        .catch(error => {
          console.log("errors catch",error.data.errors)
        });
    }
  },
  getters:{
    getResponse(state){
      return state.signResponse
    }
  }
}