<template>
  <v-app-bar class="is-transparent" app fixed>
    <v-btn icon color="white" @click="$router.push({name: 'Menu'})">
      <v-icon>fa-align-left</v-icon>
    </v-btn>

    <v-text-field
        color="white"
        class="mt-4"
        dark
        autofocus
        :placeholder="$t('Location')"
        v-model="searchTerm"
        v-on:keyup.enter="loadLocationsFromSearchTerm"
    ></v-text-field>

    <v-btn icon color="white" @click="loadLocationsFromSearchTerm">
      <v-icon>fa-search</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>

</style>
