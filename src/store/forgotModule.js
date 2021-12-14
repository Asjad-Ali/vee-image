import axios from 'axios'


export default{
  namespaced:true,
  state:{
    Snackbar:"",
    snackbarMsg:"",
  },
  mutations: {
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_MSG(state,snackbarM){
      state.snackbarMsg = snackbarM;
  },

},
  actions: {
    updateSnackBarStatus({commit}){
      commit("SET_SNACKBAR",false);
     },
    forgot({commit},payload){
      axios.post("https://imagesharelink.herokuapp.com/api/forget_password",payload)
        .then((res) => {

          console.log("forgot Response",res.data);
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_MSG',res.data.Message)
          
        })
        .catch(error => {
          console.log("errors catch",error.data)
        });
    }
  },
  getters:{
    getSnackbarStatus(state){
      return state.Snackbar;
      },
      getSnackbarMsg(state){
        return state.snackbarMsg;
      },
    }
  }

