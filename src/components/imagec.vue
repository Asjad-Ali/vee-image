<template>
  <div>

    <v-row class="d-flex flex-row">
      <v-col
        v-for="n in pic"
        :key="n"
        class="d-flex child-flex"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="10"
      >
        <v-card rounded="lg" elevation="5">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
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
</template>

<script>
export default {
  props: ['picNum'],
  name: "imagec",
  data(){
    return{
      pic:5
    }
  }
};
</script>
