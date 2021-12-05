<template>
  <div class="Signpage">
    <appbar-2 />
    <v-main class="mb-10">
      <v-container>
        <!-- <v-card rounded="lg" elevation="5" class="pa-5 mb-4"> -->
        <!-- <v-card-title class="justify-center"></v-card-title> -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" lg="4" md="6" sm="6" xs="10">
            <div class="d-flex justify-center my-5"><h3>SIGNUP</h3></div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                color="dark"
                append-icon="mdi-account"
                :rules="nameRules"
                label="Name"
                hint="e.g Asjad"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="email"
                append-icon="mdi-email"
                :rules="emailRules"
                color="dark"
                label="E-mail"
                hint="e.g asjadaliwatto@gmail.com"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="password"
                color="dark"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                :rules="passwordRules"
                label="Password"
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="cpassword"
                color="dark"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                :rules="cpasswordRules"
                label="Confirm Password"
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>

              <v-row class="justify-center my-1">
                <v-btn
                  :disabled="!valid"
                  width="25%"
                  outlined
                  color="dark"
                  class="mx-10"
                  @click="signup"
                >
                  SIGNUP
                </v-btn>
              </v-row>
              <v-row class="d-flex justify-center mt-5">
                <p>
                  Already have an account
                  <router-link to="/login">Click Here</router-link>
                </p>
              </v-row>
            </v-form>
          </v-col>
          <v-col cols="12" lg="2" md="2" sm="2" xs="10">
            <div class="d-flex align-center justify-center pb-10 pt-3"><h4>OR</h4></div>
          </v-col>
          <v-col cols="6" lg="3" md="3" sm="3" xs="6">
            <v-row class="d-flex flex-column align-center pa-0 mt-n8">
                <div><p class="pa-0 mt-n5" >Signin with another account</p></div>
              <v-col cols="12" class="pt-0 mt-0">
                <v-btn block class="primary">
                  <v-icon class="me-2 ms-n2">mdi-facebook</v-icon>
                  Facebook</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn class="red darken-2 white--text" block>
                  <v-icon size="20" class="me-4 ms-n4">mdi-google </v-icon>
                  Google</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn class="blue lighten-1 white--text" block>
                  <v-icon class="me-2 ms-n2">mdi-twitter </v-icon>
                  TWITTER</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn class="pink darken-1 white--text" block>
                  <v-icon class="me-2 ms-n2">mdi-instagram </v-icon>
                  INSTAGRAM</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- </v-card> -->
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Appbar2 from "./appbar2.vue";
export default {
  components: { Appbar2 },
  name: "signup",
  computed: {
    passwordMatch() {
      return () =>
        this.password === this.cpassword ||
        "Password and Confirm password doesn't match";
    },
  },
  data() {
    return {
      show1: false,
      valid: true,
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      cpassword: "",
      phoneNumber: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
        (v) => v.length >= 3 || "Name must be greater than 3 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Min 8 characters",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!%*.?&]{8,}$/.test(
            v
          ) || "Password is not valid Enter password like e.g Asjad@264",
      ],
      cpasswordRules: [
        (v) => !!v || "Confirm Password is required",
        (v) => v.length >= 8 || "Min 8 characters",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!%*.?&]{8,}$/.test(
            v
          ) || "Password is not valid Enter password like e.g Asjad@264",
      ],
    };
  },
  methods: {
    // ========> For Signup <==================
    signup() {
      if (this.$refs.form.validate()) {
        alert("Login Successfully");
      }
    },
  },
};
</script>

<style>
</style>