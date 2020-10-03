<template>
  <v-app>
    <v-main class="main-wrap">
      <v-container fluid>
        <topNav />
        <v-row class="fill-height">
          <v-col style="display: flex; flex-wrap: wrap;">

            <imageContainer v-for="photo in photos" :key="photo.id" v-bind:imageSrc="photo.img_src"> </imageContainer>

            <!-- <div v-for="photo in photos" :key="photo.id" class="image-container">
              <v-img v_bind:lazy-src="photo.img_src" max-width="100%" contain="" v-bind:src="photo.img_src"> </v-img>
            </div> -->

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import topNav from "./components/topNav";
  import imageContainer from "./components/imageContainer";

  export default {
    name: "App",

    components: {
      topNav,
      imageContainer
    },

    data: () => ({

    }),

    mounted: function () {},

    computed: {
      photos() {
        return (this.$store.getters.getAllPhotos.photos)
      }

    }
  };
</script>

<style lang="scss" scoped>
@import "./scss/global.scss";
</style>