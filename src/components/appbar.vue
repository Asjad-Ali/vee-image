<template>
  <v-container>
    <v-app-bar app elevation="2" elevate-on-scroll>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="primary-text ps-0"><h3><b>Vee</b>Image</h3></v-toolbar-title>

      <v-spacer></v-spacer>
      <div class=" d-flex justify-space-between"> 
        <v-btn outlined>
          <v-icon>mdi-signup</v-icon>
          SIGNUP</v-btn>
        <v-btn class="ms-2" outlined>
          <v-icon class="me-1">mdi-login-variant</v-icon>
           SIGNIN</v-btn>
      </div>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/asjad 1.jpg" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              ><a @click="route('profile')"
                ><b>Asjad Ali </b></a
              ></v-list-item-title
            >
            <v-list-item-subtitle class="success--text"
              >Logged In</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <div class="listitem">
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="route(item.route)"
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Homepage", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
    };
  },
};
</script>

<style>
.Logo{
  font-size: 30px;
}
</style>