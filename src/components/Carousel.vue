<template>
  <carousel
    autoplay
    pagination-enabled
    pagination-active-color="#0D47A1"
  >
    <slide
      v-for="(slide, i) in items"
      :key="i"
    >
      <img
        :src="slide.src"
      />
    </slide>
  </carousel>
</template>

<script>
  export default {
    name: 'overview-carousel',
    items: [
      {
        src: '../static/carousel/team1.jpg'
      },
      {
        src: '../static/carousel/team2.jpg'
      },
      {
        src: '../static/carousel/tablet_team.jpg'
      },
      {
        src: '../static/carousel/tablet1.jpg'
      },
      {
        src: '../static/carousel/screenshotApp1.png'
      }
    ]
  }
</script>
