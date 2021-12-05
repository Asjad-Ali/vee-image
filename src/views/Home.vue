<template>
<v-app>
  <appbar />
  <v-main class="pa-0"> 
    <h1>Home</h1>
  </v-main>
</v-app>
</template>

<script>
import Appbar from '../components/appbar.vue'
 

  export default {
    name: 'Home',

    components: {
        Appbar
    },
  }
</script>
