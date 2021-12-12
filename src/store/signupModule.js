import axios from 'axios'

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
        .post("https://imagesharelink.herokuapp.com/api/register", payload)
        .then((res) => {
          console.log("Sign Response",res.data);
          commit('signupRes',res)
          // open("/login","_self")
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