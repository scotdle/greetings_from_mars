<template>
  <div class="topnav__container">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      height="100%"
      width="300px"
      right
    >
      <h1 class="topnav__header">Choose A Date!</h1>

      <datePicker />
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-spacer></v-spacer>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import datePicker from "./datePicker";
export default {
  name: "topNav",

  components: {
    datePicker
  },

  data: () => ({
    drawer: true
  })
};
</script>

<style lang="scss" scoped>
@import "../scss/components/topNav.scss";
</style>
