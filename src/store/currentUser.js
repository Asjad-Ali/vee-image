import axios from 'axios'

export default{
  namespaced:true,
  state:{
    currentUser:[]
  },
  mutations: {
    cUser(state,data){
      state.currentUser=data
    }
  },
  actions: {
    currentData({commit}){ 
      axios.post("https://imagesharelink.herokuapp.com/api/profile")
      .then( (res) => { 
        localStorage.setItem("currentUser",JSON.stringify(res.data))
        commit("cUser",res.data)
          console.log("Current User Response",res.data);
      }).catch( (error) => {
        console.log("Current User Catch part ",error)
      })
    }
  },
  getters:{
    getCurrentUser(state){
      return state.currentUser
    }
  }
}