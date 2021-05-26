<template>
  <v-overlay v-if="active">
    <v-progress-circular
        indeterminate
        color="white"
        size="50"
    ></v-progress-circular>
  </v-overlay>
</template>


<script>
import { mapGetters } from 'vuex'


export default {
  name: "LoadingIndicator",
  computed: {
    ...mapGetters({
      "active": "ui/loadingIndicatorActive"
    })
  }
}
</script>
