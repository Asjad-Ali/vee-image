<template>
  <v-app>
    <appbar />
    <v-main class="pa-0">
      <v-container class="d-flex flex-column">
        <div>
          <v-col class="d-flex align-center justify-center">
            <h1 class="display-2">Gallery</h1>
          </v-col>
        </div>
        <gallerybar />
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
  components: {
    Appbar,
    imagec,
    Gallerybar,
  },
};
</script>
