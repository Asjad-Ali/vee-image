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

export default {
  components: { Foter },
  data(){
    return{
      
    }
  }
};
</script>
