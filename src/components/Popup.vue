<template>
  <v-dialog v-model="visible" width="500">
      <v-card class="popup-card">
        <v-card-text class="pa-6 title white--text popup-text">
           {{msg}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="$store.commit('ui/hidePopup')">
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>


<script>
import { mapGetters } from "vuex"


export default {
  name: "Popup",
  computed: {
    ...mapGetters({
      "visible": "ui/popupVisible",
      "msg": "ui/popupMsg"
    })
  }
}
</script>


<style scoped>
  .popup-card {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }

  .popup-text {
    height: 150px
  }
</style>
