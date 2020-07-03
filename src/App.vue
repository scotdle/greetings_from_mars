<template>
  <v-app>
    <v-main>
      <topNav />
    </v-main>
  </v-app>
</template>

<script>
import topNav from "./components/topNav";

export default {
  name: "App",

  components: {
    topNav
  },

  data: () => ({
    //
  })
};
</script>

