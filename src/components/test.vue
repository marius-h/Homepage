<template>
  <a v-for="locale in locales"  @click.prevent="setLanguage(locale.value)">
    {{ locale.native }}
  </a>
</template>

<script>
  import { locales } as locale_list from '../i18n/map'
  export default {
    computed: {
      locales() {
        return locale_list;
      }
    },
    methods: {
      setLanguage(value) {
        this.$root.locale = value;
      }
    }
  }
</script>
