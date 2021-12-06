<template>
  <div class="Signpage">
    <appbar-2/>
    <v-main class="mb-10">
      <v-container>
        <!-- <v-card-title class="justify-center"></v-card-title> -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" lg="5" md="6" sm="6" xs="10">
            <v-card rounded="lg" outlined elevation="1" class="px-5 pb-5 pt-2 mb-4">
              <div class="d-flex justify-center"><h4 class="logStyle" ><b>Vee</b>Image</h4></div>
              <div class="d-flex justify-center my-4"><h2>login</h2></div>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  append-icon="mdi-email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  :rules="passwordRules"
                  label="Password"
                  required
                  outlined
                  dense
                ></v-text-field>
                <v-row class="d-flex align-start justify-end mt-n5">
                  <a style="font-size: 15px; padding: 7px 12px 0px 0px"
                    ><router-link to="/forget"
                      >Forgot Password</router-link
                    ></a
                  >
                </v-row>
                <v-row class="justify-center my-4">
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    width="25%"
                    class="mx-10"
                    
                  >
                    LOGIN
                  </v-btn>
                </v-row>
                <v-row justify="center">
                  <p>
                    Don't have account
                    <router-link to="/signup">Click Here</router-link>
                  </p>
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
import appbar2 from '../components/appbar2.vue'
export default {
  components:{appbar2},
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
      email: "",
      password: "",

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
.logStyle{
  font-family: 'Brush Script MT';
  font-size: 40px;
  color:#1976D2
}
</style>