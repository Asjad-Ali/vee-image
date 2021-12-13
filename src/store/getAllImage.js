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
    getImageFun({commit},payload){
      console.log("Upload image",payload)
      axios.post("https://imagesharelink.herokuapp.com/api/my_images",payload)
        .then((res) => {
          console.log("Update Response",res.data);
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_ERRRORMSG',res.data.message)
        })
        .catch(error => {
          console.log(error.res)
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
},

}