<template>
  <v-app>
      <appbar-2 />
    <v-main class="pt-0">
      <v-container class="d-flex align-space-between py-10">
        <v-row class="d-flex align-center justify-space-between">
          <v-col
            cols="12"
            lg="6"
            md="12"
            sm="12"
            xs="12"
            class="d-flex flex-column align-center justify-space-between"
          >
            <h2 class="intro-heading mb-5">
              Welcome to Image Hosting and Sharing
            </h2>
            <p class="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus eius, iusto animi natus blanditiis totam minus commodi
              ex vero voluptatem nesciunt cupiditate! Hic expedita nostrum odit
              officia? Pariatur, quas blanditiis? Officia laborum asperiores ab
              quo, optio fugit perferendis necessitatibus ullam libero quod
              corrupti. Numquam, rem pariatur quibusdam consectetur beatae
              minima?
            </p>

            <v-row class="d-flex d-block">
              <v-col>
                <v-btn
                  router
                  to="/signup"
                  color="success"
                  class="white-text mr-2"
                  rounded
                  >GET STARTED</v-btn
                >
              </v-col>
              <v-col>
                <v-btn color="primary" class="white-text" rounded>
                  <v-icon>mdi-play-circle</v-icon> WATCH VIDEOS
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="d-flex justify-center"
            cols="12"
            lg="6"
            md="12"
            sm="12"
            xs="12"
          >
            <img
              contain
              width="400rem"
              src="../assets/landingimage.png"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import appbar2 from '../components/appbar2';
export default {
  components: { appbar2 },
  name: "landingpage",
  data(){
      return{

      }
  },
  
};
</script>

<style>
.intro-heading {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 50px;
  color: #444;
  line-height: 55px;
  padding-bottom: 20px;
}
</style>