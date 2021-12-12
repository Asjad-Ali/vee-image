<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <foter />
  </v-app>
</template>

<script>

import Foter from './components/foter.vue';
// import axios from 'axios'
export default {
  components: { Foter },
  data(){
    return{
      
    }
  },
  mounted(){

  }


};
</script>
