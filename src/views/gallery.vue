<template>
  <v-app>
    <appbar />
    <v-main class="pa-0">
      <v-container>
        <div>
          <v-col class="d-flex align-center justify-center">
            <h1 class="display-3">Gallery</h1>
          </v-col>
        </div>
        <v-toolbar
          class="align-center justify-center mb-2"
          rounded="lg"
          fixed
          color="white"
          elevation="2"
          elevate-on-scroll
        >
          <div class="d-flex align-center justify-center">
            <v-list class="d-flex flex-row ma-0 pa-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title  class="body-1 font-weight-bold">
                    <v-btn class="body-1 font-weight-bold" @click="getAllImage" primary-text primary text small>All</v-btn>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div class="d-flex align-center justify-center">
            <v-list class="d-flex flex-row ma-0 pa-0">
              <v-list-item
              v-for="item in sample" :key="item.index"
              >
              <a>
              <v-list-item-content @click="sampleImages(item.title,item.val)">
                  <v-list-item-title  class="body-1 font-weight-bold primary--text">
                    {{item.title}}
                  </v-list-item-title>
                </v-list-item-content>
              </a>
              </v-list-item>
            </v-list>
          </div>

          <v-spacer></v-spacer>
          <div class="d-flex align-end justify-center">
            <v-col cols="12">
              <v-text-field
                label="Search"
                color="dark"
                outlined
                placeholder="Search images"
                append-icon="mdi-magnify"
                dense
                hide-details
              ></v-text-field>
            </v-col>
          </div>
        </v-toolbar>
      </v-container>

      <v-container>
          <v-row class="d-flex flex-row">
            <v-col
              v-for="image in getAllImages"
              :key="image.index"
              class="d-flex child-flex"
              cols="12"
              lg="4"
              md="4"
              sm="6"
              xs="10"
            >
              <v-card rounded="lg" elevation="5" class="d-flex justify-end">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text id="imgbtn" dark v-bind="attrs" v-on="on">
                      <v-icon size="25px" @click="singleImage(image.id)" class="ms-5 me-n3"
                        >mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      id="listitem"
                      v-for="(item, index) in imageSetting"
                      :key="index"
                    >
                      <v-list-item-title
                        id="imgeMenu"
                        text
                        @click="router(asjad)"
                        ><v-icon class="me-2">{{ item.icon }}</v-icon
                        >{{ item.title }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-img
                  :src="image.link"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
      </v-container>


      <v-container>
        <div>
          <v-row>
            <v-col class="d-flex align-center justify-center">
              <h1 class="display-1">{{category}}</h1>
            </v-col>
          </v-row>
          <v-row class="d-flex flex-row">
            <v-col
              v-for="n in picture"
              :key="n"
              class="d-flex child-flex"
              cols="12"
              lg="4"
              md="4"
              sm="6"
              xs="10"
            >
              <v-card rounded="lg" elevation="5" class="d-flex justify-end">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text id="imgbtn" dark v-bind="attrs" v-on="on">
                      <v-icon size="25px" class="ms-5 me-n3"
                        >mdi-dots-vertical</v-icon
                      >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      id="listitem"
                      v-for="(item, index) in imageSetting"
                      :key="index"
                    >
                      <v-list-item-title
                        id="imgeMenu"
                        text
                        @click="router(asjad)"
                        ><v-icon class="me-2">{{ item.icon }}</v-icon
                        >{{ item.title }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Appbar from "../components/appbar.vue";

export default {
  name: "gallery",
  picture: 10,
  components: {
    Appbar,
  },
  data() {
    return {
      drawer: false,
      picture: 1,
      category:"",
      items: [
        { title: "Home", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      sample: [
        { title: "Public", val: 3 },
        { title: "Private", val: 5 },
        { title: "Hidden", val: 2 },
      ],
      imageSetting: [
        { title: "Public", icon: "mdi-earth" },
        { title: "Private", icon: "mdi-file-lock" },
        { title: "Hidden", icon: "mdi-lock-alert" },
        { title: "Share", icon: "mdi-share"},
        { title: "Get link", icon: "mdi-file-link" },
        { title: "Delete", icon: "mdi-delete" },
      ],
    };
  },
  computed:{
    ...mapGetters("getAllImage",["getAllImages"]),
    
  },
  methods: {
    singleImage(id){
      alert(id)
    },
    sampleImages(cat,val){
      this.picture = val,
      this.category = cat
    },
    getAllImage() {
      console.log("i am get All image")
      this.$store.dispatch("getAllImage/getImageFun")
    },
  },
};
</script>

<style scoped>
#imgbtn {
  position: absolute;
  z-index: 1;
}
#imgeMenu {
  cursor: pointer;
}
#listitem :hover {
  color: black;
  font-weight: bold;
}

</style>
