<template>
  <v-container>
    <v-app-bar app color="white" elevation="2" elevate-on-scroll>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <h4 class="logStyle"><b>Vee</b>Image</h4>

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

      <div class="hidden-xs-only">
        <v-container fluid style="height: 50px">
          <v-row justify="center">
            <v-menu bottom min-width="170px" rounded offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="brown" size="48">
                    <img src="../assets/asjad 1.jpg" alt="">
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <!-- <v-avatar color="brown">
                      <span class="white--text text-h5">{{
                        user.initials
                      }}</span>
                    </v-avatar> -->
                    <h4>{{ user.fullName }}</h4>
                    <p class="text-caption ma-0 py-1">
                      {{ user.email }}
                    </p>
                    <v-divider></v-divider>
                    <div class="d-flex flex-column">
                     <v-btn router to="/profile" small height="25px" rounded text> Edit Profile </v-btn>
                    <v-btn router to="/login" small  rounded text> Logout </v-btn>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      user: {
        initials: 'Asjad',
        fullName: 'Asjad Ali Watto',
        email: 'asjadaliwatto@gmail.com',
      },
      items: [
        { title: "Home", icon: "mdi-collage" },
        { title: "Gallery", icon: "mdi-image-multiple" },
        { title: "About Us", icon: "mdi-information" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      baritems: [
        { title: "Home", route: "/home" },
        { title: "Gallery", route: "/gallery" },
        { title: "About Us", route: "/about" },
      ],

    };
  },
  methods: {
    router(route) {
      this.$router.push(route);
    },
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