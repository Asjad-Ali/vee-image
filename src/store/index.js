import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import signupModule from './signupModule'
import loginModule from './loginmodule'
import forgotModule from './forgotModule'
import imageView from './imageView'
import updateProfile from './updateProfile'
import currentUser from './currentUser'
import uploadImage from './uploadImage'



Vue.use(axios)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signupModule,
    loginModule,
    forgotModule,
    imageView,
    updateProfile,
    currentUser,
    uploadImage

  
  },
  state: {
    Snackbar:false,
    snackbarMsg:"",
    snackbarErrorMsg:"",
  },
  mutations: {
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBAR_MSG(state,Snackbar){
      state.snackbarMsg = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state,snackbarErrorMsg){
      state.snackbarErrorMsg = snackbarErrorMsg;
    },
  },
  actions: {
     //set snackbar 
     updateSnackBarStatus({commit}){
      commit("SET_SNACKBAR",false);
     },
    logout({commit}){ 
      axios.post("https://imagesharelink.herokuapp.com/api/logout")
      .then( (res) => {
        console.log(res.data)
        localStorage.removeItem("Token")
        localStorage.removeItem("currentUser")
        open("/login","_self")
        commit('SET_SNACKBAR',true)
        commit('SET_SNACKBAR_MSG',res.data.message)

      })
      .catch( (error) => {
        commit('SET_SNACKBARMSG_ERRRORMSG',error.res.message)
        console.log(" logout Catch part ",error.data)
      })
    },

  },
  // snackbar 
  getters:{
    getSnackbarStutes(state){
    return state.Snackbar;
    },
    getSnackbarErrorMsg(state){
      return state.snackbarErrorMsg;
    }
},
  
})
