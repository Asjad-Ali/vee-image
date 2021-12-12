import axios from 'axios'


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
    getImage({commit},payload){
      console.log(payload)
      axios
        .get("https://imagesharelink.herokuapp.com/api/forget_password",payload)
        .then((res) => {
          console.log("Image Response",res.data);
          commit('loginRes',res.data)
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