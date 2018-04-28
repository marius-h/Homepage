<template>
  <v-carousel
    light
    class="elevation-1"
    hide-delimiters
  >
    <v-parallax>
    <v-carousel-item
      mouse-drag
      transition="fade"
      reverse-transition="fade"
      v-for="(item,i) in items"
      :key="i"
    >
      <v-layout
        column
        wrap
        align-center
      >
        <img :src="item.src" style="max-height: 500px"/>
      </v-layout>
    </v-carousel-item>
    </v-parallax>
  </v-carousel>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        name: 'overview-carousel',
        items: [
          { src: '../static/carousel/team1.jpg' },
          { src: '../static/carousel/team2.jpg' },
          { src: '../static/carousel/tablet_team.jpg' },
          { src: '../static/carousel/tablet1.jpg' },
          { src: '../static/carousel/screenshotApp1.png' }
        ]
      }
    }
  }
</script>

<style scoped>
  h3 {
    font-size: 32px;
    font-weight: 300;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
