<template>
  <v-app>
    <appbar />
    <v-main class="d-flex align-center pa-0">
      <v-container class="d-flex flex-column align-center justify-center">
        <h1 id="uploadTitle">Upload and share your images.</h1>
        <p id="uploadSubtitle">
          Drag and drop anywhere you want and start uploading your images now.
          10 MB limit. Direct image links, BBCode and HTML thumbnails.
        </p>
        <v-btn class="primary my-4 subtitle-1" height="80px" width="300px"
          >Add photos</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "../components/appbar.vue";
export default {
  name: "Home",

  components: {
    Appbar
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
      },
    };
  },
};
</script>

<style scoped>
#uploadTitle {
  color: rgba(56, 56, 56, 0.89);
  justify-content: center;
  font-size: 4em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 25%);
}
#uploadSubtitle {
  color: rgba(56, 56, 56, 0.89);
  text-align: center;
  font-size: 2em;
  line-height: 130%;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 25%);
}
.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
