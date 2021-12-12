<template>
  <div class="Signpage">
    <appbar />
    <v-main class="pa-0 mt-0 mb-8">
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
              <div class="d-flex justify-center my-5">
                <h2>Profile info</h2>
              </div>
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
                    v-model="image"
                    hide-input
                    prepend-icon="mdi-camera"
                    hide-details
                    @change="previewImage"
                  >
                  </v-file-input>
                </v-row>
                <v-text-field
                  v-model="name"
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
                  v-model="email"
                  append-icon="mdi-email"
                  :rules="emailRules"
                  color="primary"
                  label="E-mail"
                  hint="e.g asjadaliwatto@gmail.com"
                  readonly
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="age"
                  color="primary"
                  append-icon="mdi-account-clock"
                  label="Age"
                  hint="e.g 16"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="password"
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
                  v-model="cpassword"
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

                <v-row class="justify-center my-1">
                  <v-btn
                    width="25%"
                    color="primary"
                    class="mx-10"
                    @click="update"
                  >
                    UPDATE
                  </v-btn>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Appbar from "./appbar.vue";
export default {
  components: { Appbar },
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
      image:"",
      imgUrl:"https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png",
      name: "",
      email: "",
      age:"",
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
    mounted(){

    },
  methods: {
    previewImage() {
      this.imgUrl = URL.createObjectURL(this.image);
    },
    update(){
      this.$store.dispatch("currentUser/currentUser")
    }
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