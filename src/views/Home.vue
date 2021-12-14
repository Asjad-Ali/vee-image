<template>
  <v-main class="d-flex align-center pa-0">
    <appbar />
    <v-container class="d-flex align-center flex-column justify-center mt-10">
      <vue-dropzone :options="dropzoneOptions" @vdropzone-complete="uploadComOrFail" :useCustomSlot="true">
        <div class="d-flex flex-column align-center justify-center">
          <h1 id="uploadTitle">Upload and share your images.</h1>
          <p id="uploadSubtitle">
            Drag and drop anywhere you want and start uploading your images now.
            10 MB limit. Direct image links, BBCode and HTML thumbnails.
          </p>
          <v-btn class="primary my-4 subtitle-1" height="70px" width="250px"
            >Add photos</v-btn
          >
        </div>
      </vue-dropzone>
      <v-row class="d-flex flex-column align-center justify-center my-10">
        <v-col >
                <v-text-field
                  v-model="imageObj.status"
                  color="primary"
                  append-icon="mdi-image"
                  label="Image Status"
                  hide-details=""
                  placeholder="Public, Private, Hidden"
                  required
                  outlined
                  dense
                ></v-text-field>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn @click="upload" x-large class="primary" rounded>
            Upload
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar top color="black" :value="getSnackbarStutes" timeout="3000">
      {{ getSnackbarErrorMsg }}
    </v-snackbar>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import Appbar from "../components/appbar.vue";
import vue2Dropzone from "vue2-dropzone";
import axios from "axios";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Home",
  components: {
    Appbar,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      imageObj:{
        image:"",
      status:"",
      },
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        maxFilesize: 1,
        addRemoveLinks: true,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
  
  methods:{
    upload(){
      console.log("I am image obj")
      console.log(this.imageObj)
      this.$store.dispatch("uploadImage/upliadImageFun",this.imageObj)
    },
    uploadComOrFail: async function (response){
      if(response.status=="success")
      {
        
        this.imageObj.image = response.dataURL
        console.log("Successfully uploaded")
        console.log(response)
      }
      else
      {
        console.log("Upload faild")
      }
    }
  },
  computed: {
    ...mapGetters("uploadImage", ["getSnackbarStutes"]),
    ...mapGetters("uploadImage", ["getSnackbarErrorMsg"]),
  },
  mounted() {
    let token = JSON.parse(localStorage.getItem("Token"));
    console.log("Token:", token);
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    this.$store.dispatch("currentUser/currentData");
  },
};
</script>

<style scoped>
#uploadTitle {
  color: rgba(56, 56, 56, 0.89);
  justify-content: center;
  font-size: 3em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 25%);
}
#uploadSubtitle {
  color: rgba(56, 56, 56, 0.89);
  text-align: center;
  font-size: 30px;
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
