<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex class="text-xs-center">
        <h1 class="display-2 primary--text">404</h1>
        <p>Die Seite, die Sie suchen existiert nicht</p>
        <v-btn outline color="primary" to="/">Zurück zur Startseite</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        default: '/'
      }
    },
    created () {
      this.$ssrContext && this.$ssrContext.res.status(404)
    }
  }
</script>

<style scoped>

</style>
