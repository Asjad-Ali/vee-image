<template>
  <div>
    <v-app-bar color="white" app class="px-2 mb-5" elevation="1" hide-on-scroll  border="bottom">
      <h4 class="logStyle"><b>Vee</b>Image</h4>


      <v-spacer></v-spacer>
      <div class="d-flex justify-space-between">
        <v-btn router to="/signup" class="primary hidden-xs-only">
          <v-icon>mdi-signup</v-icon>
          SIGNUP</v-btn
        >

        <v-btn router to="/login" class="primary hidden-xs-only ms-2">
          <v-icon class="me-1">mdi-login-variant</v-icon>
          LOGIN</v-btn
        >

        <v-btn small class="primary hidden-sm-and-up">
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

    };
  },

};
</script>

<style>
.logStyle {
  font-family: "Brush Script MT";
  font-size: 40px;
  color: #1976d2;
}
h4,
h2,
h3 {
  color: rgba(22, 22, 22, 0.712);
}
a {
  text-decoration: none;
}
</style>