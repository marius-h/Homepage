<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/news" class="info">Neuigkeiten</v-btn>
      </v-flex>
      <v-carousel>
          <v-carousel-item
            v-for="(item, i) in items"
            :src="item.src"
            :key="i"
          >
          </v-carousel-item>
        </v-carousel>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in items"
            :src="item.src"
            :key="i"
          >
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        items: [
          { src: 'https://commons.wikimedia.org/wiki/Paris#/media/File:Paris_Night.jpg' }
        ]
      }
    }
  }
</script>
