<template>
  <div >
    <v-app-bar class="px-2" app   elevation="2" elevate-on-scroll>
        <h4 class="logStyle" ><b>Vee</b>Image</h4>
          <!-- <v-toolbar-title ><p id="logo"><b>Vee</b>Image</p></v-toolbar-title> -->

      <v-spacer></v-spacer>
      <div  class=" d-flex justify-space-between"> 
        <v-btn class="hidden-xs-only" outlined>
          <v-icon>mdi-signup</v-icon>
          SIGNUP</v-btn>
        <v-btn class="hidden-xs-only ms-2" outlined>
          <v-icon class="me-1">mdi-login-variant</v-icon>
           SIGNIN</v-btn>
        <v-btn small class="hidden-sm-and-up " outlined>
          <v-icon class="pa-0 ma-0">mdi-login-variant</v-icon>
           </v-btn>
      </div>
      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Homepage", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
    };
  },
};
</script>

<style>
.logStyle{
    font-family: 'Brush Script MT';
  font-size: 40px;
  color:rgba(22, 22, 22, 0.712)
}
h4,h3{
    color:rgba(22, 22, 22, 0.712)
}
a{
    text-decoration: none;
}
</style>