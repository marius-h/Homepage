<template>
  <section>
    <v-carousel
      hide-controls
      hide-delimiters
      light
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :src="item.src"
        :key="i"
      >
      </v-carousel-item>
    </v-carousel>
  </section>


</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        items: [
          {
            src: '../static/squirrel.jpg'
          },
          {
            src: 'https://commons.wikimedia.org/wiki/Paris#/media/File:Paris_Night.jpg'
          }
        ]
      }
    }
  }
</script>
