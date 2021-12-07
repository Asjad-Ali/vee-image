<template>
  <v-app>
    <appbar />
    <v-main class="pa-0">
        <div class="px-10 d-flex flex-column">
        <v-row class="d-flex justify-center">
            <h1 class="display-1">Gallery</h1>
        </v-row>
        <v-row class="d-flex flex-row">
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="12" lg="3" md="4" sm="6" xs="10">
              <v-card rounded="lg" elevation="5">
            <v-img
              
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
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
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "../components/appbar.vue";

export default {
  name: "gallery",
  components: {
    Appbar,
  },
};
</script>
