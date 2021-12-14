import axios from 'axios'

export default{
  namespaced:true,
  state:{
    signResponse:[],
    Snackbar:false,
    snackbarMsg:"",
    snackbarErrorMsg:"",

  },
  mutations: {
    signupRes(state,data){
      state.signResponse=data
    },
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_MSG(state,snackbarMsg){
      state.snackbarMsg = snackbarMsg;
    },
    SET_SNACKBARMSG_ERRORMSG(state,snackbarMsg){
      state.snackbarErrorMsg = snackbarMsg;
    },
  },
  actions: {
    updateSnackBarStatus({commit}){
      commit("SET_SNACKBAR",false);
     },
    signup({commit},payload){
      console.log(payload)
      axios
        .post("https://imagesharelink.herokuapp.com/api/register", payload)
        .then((res) => {
          console.log("Sign Response",res.data);
          commit('signupRes',res)
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_MSG',res.data.message)
          open("/login","_self")
        })
        .catch(error => {
          console.log(error.res)
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_ERRORMSG',error.res)

        });
    }
  },
  getters:{
    getResponse(state){
      return state.signResponse
    },
    getSnackbarStatus(state){
      return state.Snackbar;
      },
      getSnackbarMsg(state){
        return state.snackbarMsg;
      },
      getSnackbarErrorMsg(state){
        return state.snackbarMsg;
      }
  }
}