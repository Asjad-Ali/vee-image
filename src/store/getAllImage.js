import axios from 'axios'

export default{
  namespaced:true,
  state:{
    allimages:[],
    Snackbar:false,
    snackbarErrorMsg:"",
  },
  mutations: {
    allImages(state,resImages){
      state.allimages=resImages
    },
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
    getImageFun({commit}){
      console.log("Upload image")
      axios.post("https://imagesharelink.herokuapp.com/api/my_images")
        .then((res) => {
          console.log("Get All Image Response",res.data.Images);
          commit('allImages',res.data)
          commit('SET_SNACKBAR',true)
          commit('SET_SNACKBARMSG_ERRRORMSG',res.data.message)
        })
        .catch(error => {
          console.log(error.res)
        });
    }
  },

  getters:{
    getAllImages(state){
      return state.allimages
    },
    getSnackbarStutes(state){
    return state.Snackbar;
    },
    getSnackbarErrorMsg(state){
      return state.snackbarErrorMsg;
    }
},

}