<template>
  <v-btn
    outline
    class="primary"
    :ripple="{class: 'secondary--text'}"
    v-bind:href="`mailto:` + item.mail"
  >
    <v-icon color="primary" left>mail</v-icon>
    <div class="primary--text">Kontaktieren</div>
  </v-btn>
</template>

<script>
    export default {
        name: 'outline-btn'
    }
</script>

<style scoped>

</style>
