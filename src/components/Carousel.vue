<template>
  <!-- swiper -->
  <agile
    :arrows="false"
    :dots="true"
    autoplay="true"
  >
    <div class="slide-1"></div>
    <div class="slide-2"></div>
  </agile>

  <!--carousel
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
  </carousel-->
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
  .slide {
    color: #fff;
    height: 300px;
    position: relative;
  }
  .slide-1 {
    background-size: cover;
    background: url('/static/carousel/team1.jpg') center;
  }

  .slide-2 {
    background-size: cover;
    background: url('/static/carousel/team2.jpg') center;
  }

  .slide-3 {
    background-size: cover;
    background: url('/static/carousel/tablet_team.jpg') center;
  }

  .slide-4 {
    background-size: cover;
    background: url('/static/carousel/tablet1.jpg') center;
  }

  .slide-5 {
    background-size: cover;
    background: url('/static/carousel/screenshotApp1.png') center;
  }

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
