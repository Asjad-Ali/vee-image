import axios from 'axios'


export default{
  namespaced:true,
  state:{
    Snackbar:false,
    snackbarErrorMsg:"",
  },
  mutations: {
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state,snackbarErrorMsg){
      state.snackbarErrorMsg = snackbarErrorMsg;
    },
  },
  actions: {
    updateSnackBarStatus({commit}){
      commit("SET_SNACKBAR",false);
     },
    login({commit},payload){
      axios
        .post("https://imagesharelink.herokuapp.com/api/login",payload)
        .then((res) => {
          localStorage.setItem("Token",JSON.stringify(res.data.Token))
          console.log("Login response",res.data);
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_ERRRORMSG',res.data.Message)
          open("/Home","_self")
        }).catch(error => {
          console.log("Login catch error",error.data)
        });
    }
  },
  getters:{
    getSnackbarStutes(state){
    return state.Snackbar;
    },
    getSnackbarErrorMsg(state){
      return state.snackbarErrorMsg;
    }
  }
}