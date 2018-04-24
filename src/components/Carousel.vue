<template>
  <carousel
    autoplay
    autoplay-timeout="5000"
    per-page="3"
    pagination-enabled
    pagination-active-color="#0D47A1"
  >
    <slide
      v-for="(slide, i) in items"
      :key="i"
    >
      <img
        style="height: 400px"
        :src="slide.src"
      />
    </slide>
  </carousel>
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
