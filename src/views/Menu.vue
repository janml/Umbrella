<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-card-title class="white--text">{{$t("Locations")}}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click="$router.push({name: 'Search'})">
        <v-icon>fa-plus</v-icon>
      </v-btn>
      <v-btn icon color="white">
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>
