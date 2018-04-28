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
      <v-container grid-list-md text-xs-center>
      <v-layout
        row
        wrap
        align-center
      >

        <v-flex xs4 md5>
        <div class="headline">John <span style="font-weight:bold">Carter</span></div>
          <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        </v-flex>

        <v-flex xs4 md5>
        <img :src="item.src" style="max-height: 500px; min-height: 500px"/>
        </v-flex>



      </v-layout>
      </v-container>
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
