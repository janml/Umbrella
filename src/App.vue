<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>


<style>
  #app {
    background: url("assets/background.jpg") no-repeat center;
    background-size: cover;
  }

  body, html {
    height: 100%;
  }

  .is-transparent {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }

  .is-white {
    color: white
  }
</style>
