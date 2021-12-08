<template>
  <div >
    <v-toolbar class="mb-2" dense rounded="lg" app color="white" elevation="2" elevate-on-scroll>

      <div class="ms-2 d-flex align-center justify-center hidden-xs-only">
        <v-list  class="d-flex flex-row ma-0 pa-0">
          <v-list-item
            v-for="item in baritems"
            :key="item.title"
            @click="router(item.route)"
          >
            <v-list-item-content>
              <v-list-item-title >{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <v-spacer></v-spacer>

    </v-toolbar>
  </div>
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
        { title: "All", route: "/home" },
        { title: "Private", route: "/gallery" },
        { title: "Public", route: "/about" },
        { title: "Hidden", route: "/about" },
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