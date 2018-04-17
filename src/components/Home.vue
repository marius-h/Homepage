<template>
  <section>
    <v-carousel
      hide-controls
      hide-delimiters
      light
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :src="'/static/screenshotApp1.png'"
        :key="i"
      >
        <div class="title">
          {{ item.title }}
        </div>
          <!--img
            :src="'../static/screenshotApp1.png'"
            style="-webkit-filter: blur(3px)" width="2000"/-->
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
            src: '../static/screenshotApp1.png',
            title: 'Elternsprechtagplaner'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: WHITE;
    font-size: 2em;
    padding: 20px;
  }
</style>
