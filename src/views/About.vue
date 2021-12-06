<template >
<v-app>
  <appbar />
  <v-main class="pa-0"> 
    <h1>About Page</h1>
    <v-container>
      <v-row justify="center">
        <v-menu transition="scroll-y-transition mt-1">
        <template v-slot:activator="{ on, attrs }"><p
         color="secondary"
          class="ma-2" 
          v-bind="attrs"
          v-on="on">
          Asjad Ali</p>
          </template>
          <v-list-item>Asjad Ali</v-list-item>
          </v-menu>
    <v-menu  transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
        >
          Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
          <v-list-item-title >Asjad</v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
        <v-list-item >
          <v-list-item-title >Asjad</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-row>

    </v-container>
  </v-main>
</v-app>
</template>

<script>
import Appbar from '../components/appbar.vue'
 
  export default {
    name: 'gallery',
    components: {
        Appbar
    },
  }
  
</script>
