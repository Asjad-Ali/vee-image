<template>
  <v-container-fluid>
    <v-app-bar color="white" elevation="2">
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <h4 class="d-flex align-center justify-center logStyle">
        <b>Vee</b>Image
      </h4>

      <div class="ms-2 mt-2 hidden-xs-only">
        <v-list dense class="d-flex flex-row">
          <v-list-item
            v-for="item in baritems"
            :key="item.title"
            @click="router(item.route)"
          >
            <v-list-item-content>
              <v-list-item-title style="font-size: 18px">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <v-spacer></v-spacer>

      <div class="text-center">
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="me-2 body-1 font-weight-bold" text large v-bind="attrs" v-on="on" >
              <v-icon size="35" class="me-1">mdi-cloud-upload</v-icon> Upload
            </v-btn>
          </template>
          <v-sheet class="text-center" height="250px">
            <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true">
              <!-- <v-btn text @click="sheet=!sheet" class="pt-0 mt-0" color="error"> close </v-btn> -->
              <div class="display-1 mb-1">Select image to upload</div>
              <v-btn class="mt-5" text x-large v-bind="attrs" v-on="on">
                <v-icon size="100">mdi-cloud-upload</v-icon>
              </v-btn>
            </vue-dropzone>
          </v-sheet>
        </v-bottom-sheet>
      </div>
      <div class="hidden-xs-only">
        <v-container fluid style="height: 60px">
          <v-row justify="center">
            <v-menu bottom min-width="230px" rounded="lg" offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="brown" size="45">
                    <img :src="getCurrentUser[0].profile_pic" alt="" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar class="mb-2" size="180" color="brown">
                      <img :src="getCurrentUser[0].profile_pic" alt="">
                    </v-avatar>
                    <h4>{{ getCurrentUser[0].name }}</h4>
                    <p class="text-caption ma-1 py-1">
                      {{ getCurrentUser[0].email }}
                    </p>
                    <v-divider></v-divider>
                    <div class="d-flex flex-column mt-2">
                      <v-btn  router to="/profile" rounded text>
                        Edit Profile
                      </v-btn>
                      <v-btn @click="logout" rounded text> Logout </v-btn>
                    </div>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" fixed temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="getCurrentUser[0].profile_pic" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><a @click="route('profile')"
                ><b>{{ getCurrentUser[0].name }}</b></a>
                </v-list-item-title
            >
            <v-list-item-subtitle class="success--text font-weight-bold"
              >Logged In</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <div>
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="router(item.route)"
          >
            <v-list-item-icon class="me-3 d-flex align-center">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-size: 16px">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
         <v-snackbar top color="red" :value="getSnackbarStutes" timeout="3000">
        {{ getSnackbarErrorMsg }}
      </v-snackbar>
  </v-container-fluid>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { mapGetters } from 'vuex';

export default {
  name: "appbar",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      drawer: false,
      sheet: false,

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
      },

      items: [
        { title: "Home", icon: "mdi-collage", route: "/home" },
        { title: "Gallery", icon: "mdi-image-multiple", route: "/gallery" },
        { title: "About Us", icon: "mdi-information", route: "/about" },
        { title: "Logout", icon: "mdi-logout", route: "/login" },
      ],
      baritems: [
        { title: "Home", route: "/home" },
        { title: "Gallery", route: "/gallery" },
        { title: "About Us", route: "/about" },
      ],
    };
  },
  computed: {
    ...mapGetters("currentUser",["getCurrentUser"])
  },
  methods: {
    router(route) {
      this.$router.push(route);
    },
    logout(){
      this.$store.dispatch("logout")
    },
    currentProfile(){
      this.$store.dispatch("currentUser/currentUser")
    }
  },
};
</script>

<style>
.logStyle {
  display: flex;
  font-family: "Brush Script MT";
  color: #1976d2;
}
</style>