<template>
  <div class="Signpage">
    <appbar-2 />
    <v-main class="mb-10">
      <v-container>

            <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

        <!-- <v-card-title class="justify-center"></v-card-title> -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" lg="4" md="6" sm="8" xs="10">
            <v-card rounded="lg" outlined elevation="1" class="px-5 pb-5 pt-2 mb-4">
              <div class="d-flex justify-center"><h4 class="logStyle" ><b>Vee</b>Image</h4></div>
              <div class="d-flex justify-center my-5"><h2>FORGOT</h2></div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="user.email"
                  append-icon="mdi-email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                  dense
                ></v-text-field>


                <v-row class="justify-center mb-5 pt-1">
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    width="25%"
                    class="mx-10"
                    @click="forgot($event)"
                  >
                    check
                  </v-btn>
                </v-row>
                <v-row class="d-flex justify-center mt-5">
                  <p>
                    Already have an account
                    <router-link to="/login">Click Here</router-link>
                  </p>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
     <v-snackbar top color="black" :value="getSnackbarStatus" timeout="3000">
        {{ getSnackbarMsg }}
      </v-snackbar>
  </div>
</template>

<script>
import Appbar2 from "./appbar2.vue";
import { mapGetters } from "vuex";
export default {
  components: { Appbar2 },
  name: "signup",
  computed: {
  ...mapGetters("forgotModule", ["getSnackbarStatus"]),
    ...mapGetters("forgotModule", ["getSnackbarMsg"]),
  },
  data() {
    return {
      snackbar: false,
      show1: false,
      valid: true,
      user:{
        email:""
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

    };
  },
  methods: {
    // ========> For Signup <==================
    forgot(event) {
       this.$store.dispatch("updateSnackBarStatus");
        this.$store.dispatch("forgotModule/forgot", this.user);
        event.preventDefault()
      
    },
  },
};
</script>

<style>
.logStyle{
  font-family: 'Brush Script MT';
  font-size: 40px;
  color:#1976D2
}
</style>