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
                    <img :src="image" alt="" />
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
                  label="Name"
                  hint="e.g Asjad"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  append-icon="mdi-email"
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
                  append-icon="mdi-account-clock"
                  label="Password"
                  placeholder="********"
                  
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
    <v-snackbar top color="red" :value="getSnackbarStutes" timeout="3000">
      {{ getSnackbarErrorMsg }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Appbar from "./appbar.vue";
export default {
  components: { Appbar },
  name: "signup",

  data() {
    return {
      show1: false,
      valid: true,
      // getuser:[],
      id: "",
      name: "",
      age: "",
      image: "",
      password:"",
      imgUrl:
        "https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png",
    //  test: "abc",
    //  obj: {
    //    name: this.test
    //  }
    };
  },

  computed: {
    ...mapGetters("updateProfile", ["getSnackbarStutes"]),
    ...mapGetters("updateProfile", ["getSnackbarErrorMsg"]),
    // ...mapGetters("currentUser",["getCurrentUser"])
  },
  //   mounted () {
  //    this.$store.modules['currentUser/nested/module/someGetter']
  // },
  methods: {
    previewImage() {
      this.imgUrl = URL.createObjectURL(this.image);
    },
    update() {
      let userUpdate = {
        name: this.name,
        age: this.age,
        profile_pic: this.image,
        password: this.password
      };

      console.log("in update",userUpdate)

      this.$store.dispatch("updateProfile/updateProfile", userUpdate);
    },
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    this.name = userData[0].name;
    this.age = userData[0].age;
    this.email = userData[0].email;
    this.image = userData[0].profile_pic;
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