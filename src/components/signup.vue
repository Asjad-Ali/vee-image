<template>
  <div class="Signpage">
    <appbar-2 />
    <v-main class="mb-10">
      <v-container>
        <v-card rounded="lg" outlined elevation="1" class="px-5 pb-5 pt-4 mb-4">
          <!-- <v-card-title class="justify-center"></v-card-title> -->
          <v-row class="d-flex align-center justify-center">
            <div>
              <h4 class="logStyle"><b>Vee</b>Image</h4>
            </div>
          </v-row>
          <v-row class="d-flex align-center justify-center mt-0 pt-0">
            <v-col cols="12" lg="4" md="6" sm="6" xs="10">
              <div class="d-flex justify-center mb-4"><h2>SIGNUP</h2></div>
              <v-form ref="form" v-model="valid" lazy-validation>

                <v-row
                  class="d-flex align-center flex-column justify-center my-2"
                >
                  <v-avatar size="150" color="primary">
                    <img :src="imgUrl" alt="" />
                  </v-avatar>
                  <v-file-input
                    class="ms-3"
                    dense
                    v-model="user.profilePicture"
                    hide-input
                    prepend-icon="mdi-camera"
                    hide-details
                    @change="convertImageBase64"
                  >
                  </v-file-input>
                </v-row>

                <v-text-field
                  v-model="user.name"
                  color="primary"
                  append-icon="mdi-account"
                  :rules="nameRules"
                  label="Name"
                  hint="e.g Asjad"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="user.email"
                  append-icon="mdi-email"
                  :rules="emailRules"
                  color="primary"
                  label="E-mail"
                  hint="e.g asjadaliwatto@gmail.com"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="user.age"
                  type="number"
                  color="primary"
                  append-icon="mdi-account-clock"
                  label="Age"
                  :rules="ageRules"
                  hint="e.g 16"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="user.password"
                  color="primary"
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
                  v-model="user.password_confirmation"
                  color="primary"
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

                  <v-btn

                    color="primary"
                    @click="signup"
                    block
                  >
                    SIGNUP
                  </v-btn>
                <v-row class="d-flex justify-center mt-5">
                  <p>
                    Already have an account
                    <router-link to="/login">Click Here</router-link>
                  </p>
                </v-row>
              </v-form>
            </v-col>
            <v-col cols="12" lg="2" md="2" sm="2" xs="10">
              <div class="d-flex align-center justify-center pb-10 pt-3">
                <h4>OR</h4>
              </div>
            </v-col>
            <v-col
              cols="6"
              lg="3"
              md="3"
              sm="3"
              xs="10"
              class="d-flex align-start justify-start"
            >
              <v-row class="d-flex flex-column align-center pa-0">
                <div><p class="pa-0 mt-n5">Signin with another account</p></div>
                <v-col cols="12" class="pt-0 mt-0">
                  <v-btn block class="primary">
                    <v-icon class="me-2 ms-n2">mdi-facebook</v-icon>
                    Facebook</v-btn
                  >
                </v-col>
                <v-col cols="12">
                  <v-btn class="red white--text" block>
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
                <v-col cols="12" class="mb-5">
                  <v-btn class="pink primaryen-1 white--text" block>
                    <v-icon class="me-2 ms-n2">mdi-instagram </v-icon>
                    INSTAGRAM</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>

      </v-main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Appbar2 from "./appbar2.vue";
import Vue from "vue";
import axios from "axios";
Vue.use(axios);
export default {
  components: {
    Appbar2,
  },
  name: "signup",
  computed: {
    ...mapGetters("signupModule", ["getResponse"]),

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
      alert: false,
      imgUrl:"https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png",
      user: {
        name: "",
        email: "",
        age: "",
        password: "",
        password_confirmation: "",
        profilePicture: null,
      },
      age: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 32 || "Name must be less than 10 characters",
        (v) => v.length >= 3 || "Name must be greater than 3 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      ageRules: [
        (v) => v.length == 2 || "Minimum age is 10 Year old Maximum 99",
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
    convertImageBase64(event) {
      this.previewImage()
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          console.log(reader.result);
          vm.user.profilePicture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
 
    },

      previewImage() {
      this.imgUrl = URL.createObjectURL(this.user.profilePicture);
    },
    // ========> For Signup <==================
    signup() {
      if (this.$refs.form.validate()) {
        console.log(this.user)

        // this.$store.dispatch("signupModule/signup", this.user);
      }
    },
  },
};
</script>

<style>
.logStyle {
  font-family: "Brush Script MT";
  font-weight: bold;
  font-size: 50px;
  color: #1976d2;
}
.signinAlert{
  position: absolute;
  top: 5%;
}
</style>