<template>
  <v-main class="ma-0 pa-0">
    <appbar />
    <v-container class="d-flex align-center justify-center">
      <v-row class="d-flex align-center justify-center">
        <v-col class="d-flex align-center justify-center"
          cols="12"
      lg="6"
          md="10"
          sm="12"
          xs="12"
        >
          <img contain width="450rem" justify-center src="../assets/landingimage.png" alt="" />
        </v-col>
        <v-col
            cols="12"
      lg="6"
          md="10"
          sm="12"
          xs="12"
          >
          <v-subheader class="display-3 my-4">About Us</v-subheader>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            voluptatem eum alias aliquam officia. Dignissimos consectetur.
          </p>
          <v-list>
            <v-list-item class="itemCheckAll">
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle
                >Lorem ipsum dolor sit amet adipisicing elit. Doloremque,
                beatae.</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item class="itemCheckAll">
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle
                >Lorem ipsum dolor sit amet consectetur
                beatae.</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item class="itemCheckAll">
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle
                >Adipisicing elit Doloremque, beatae.</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item class="itemCheckAll">
              <v-icon color="success" class="mr-3">mdi-check-all</v-icon>
              <v-list-item-subtitle
                >Lorem ipsum dolor Doloremque, beatae ipsum
                dolor.</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            voluptatem eum alias aliquam officia. Dignissimos consectetur iure
            sed, explicabo quidem vel porro eligendi iste quam! Sed amet velit
            labore ratione.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Appbar from "../components/appbar.vue";
export default {
  components: { Appbar },
  name: "landingpage",
  data() {
    return {};
  },
};
</script>

<style>
</style>