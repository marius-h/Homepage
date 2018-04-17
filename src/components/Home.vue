<template>
  <section>
    <v-carousel
      hide-controls=true
      hide-delimiters=true
      light=true
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
          <img
            :src="'../static/screenshotApp1.png'"
            style="-webkit-filter: blur(3px)" width="2000"/>
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
            src: '../static/screenshotApp1.png'
          }
        ]
      }
    }
  }
</script>
