<template>
  <v-app>
    <appbar />
    <v-main class="pa-0">
      <v-container>
        <div >
          <v-col class="d-flex align-center justify-center">
            <h1 class="display-3">Gallery</h1>
          </v-col>
        </div>
              <gallerybar />
      </v-container>
      <v-container>
                  <imagec />

        </v-container>    
        </v-main>
  </v-app>
</template>

<script>
import Appbar from "../components/appbar.vue";
import Gallerybar from '../components/gallerybar.vue';
import imagec from "../components/image.vue";

export default {
  name: "gallery",
  picture:10,
  components: {
    Appbar,
    imagec,
    Gallerybar,
  },
  data() {
    return {
      drawer: false,
      user: {
        initials: "Asjad",
        fullName: "Asjad Ali Watto",
        email: "asjadaliwatto@gmail.com",
      },
      items: [
        { title: "Home", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      baritems: [
        { title: "All",val:10 },
        { title: "Private",val:5  },
        { title: "Public",val:15},
        { title: "Hidden",val:2 },
      ],
    };
  },
  methods: {
    router(route) {
      alert(route)
      this.picture=route
      // this.$router.push(route);
    },
  },
};
</script>
