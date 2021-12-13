<template>
  <div class="Signpage">
    <appbar-2 />
    <v-main class="mb-10">
      <v-container>
        <!-- <v-card-title class="justify-center"></v-card-title> -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" lg="5" md="6" sm="6" xs="10">
            <v-card
              rounded="lg"
              outlined
              elevation="1"
              class="px-5 pb-5 pt-2 mb-4"
            >
              <div class="d-flex justify-center">
                <h4 class="logStyle"><b>Vee</b>Image</h4>
              </div>
              <div class="d-flex justify-center my-4"><h2>login</h2></div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="loginUser.email"
                  append-icon="mdi-email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                  dense
                ></v-text-field>
                <!-- :rules="passwordRules" -->
                <v-text-field
                class="mb-n2"
                  v-model="loginUser.password"
                  :rules="passwordRules"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Password"
                  required
                  outlined
                  dense
                ></v-text-field>
             
                  <a class="d-flex align-start justify-end "
                    ><router-link to="/forget">Forgot Password</router-link>
                    </a>
               
                  <v-btn
                  class="mt-2"
                    :disabled="!valid"
                    color="primary"
                    block
                    @click="login"
                  >
                    LOGIN
                  </v-btn>
                <v-row class="d-flex justify-center mt-5">
                  <p>
                    Don't have an account
                    <router-link to="/signup">Click Here</router-link>
                  </p>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
        <v-snackbar top color="black" :value="getSnackbarStutes" timeout="3000">
      {{ getSnackbarErrorMsg }}
    </v-snackbar>
  </div>
</template>

<script>
import appbar2 from "../components/appbar2.vue";
import {mapGetters} from 'vuex'
export default {
  components: { appbar2 },
  name: "signup",

  data() {
    return {
      show1: false,
      valid: true,
      loginUser: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Min 8 characters",
      ],
    };
  },
  methods: {
    // ========> For Signup <==================
    login() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("loginModule/login", this.loginUser);
      }
    },
  },
    computed: {
    ...mapGetters("loginModule", ["getSnackbarStutes"]),
    ...mapGetters("loginModule", ["getSnackbarErrorMsg"]),
  },
};
</script>

<style>
.logStyle {
  font-family: "Brush Script MT";
  font-size: 40px;
  color: #1976d2;
}
</style>