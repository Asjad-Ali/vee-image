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
    updateProfile({commit}){
      axios
        .post("https://imagesharelink.herokuapp.com/api/profile/update")
        .then((res) => {
          console.log("Update Response",res.data);
          commit('signupRes',res.data)
        //   window.open("/login", '_self');
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