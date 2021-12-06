<template>
    <div>
    <v-card class="d-flex flex-column text-center">
      <v-divider></v-divider>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. 
      </v-card-text>

      <v-card-text >
          <strong><b>Vee</B>Image </strong>
          <v-icon size="17">mdi-copyright</v-icon> Copyrights
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script >
export default {
  name: "foter",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram" ,"mdi-whatsapp"],
    };
  },
};
</script>