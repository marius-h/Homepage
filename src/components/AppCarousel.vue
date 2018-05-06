<template>
  <v-jumbotron
    dark
    gradient="to bottom, #0D47A1, #2A5DAC"
    height="auto"
  >
    <v-carousel
      light
      class="elevation-0"
      hide-delimiters
    >
      <v-carousel-item
        mouse-drag
        transition="fade"
        reverse-transition="fade"
        v-for="(item,i) in items"
        :key="i"
        class="my-3"
      >
        <v-container
          grid-list-xl
          fill-height
          class="px-5 align-content-center"
        >
          <v-layout wrap>
            <v-flex
              xs12
              md6
              order-xs2
              order-md1
            >
              <v-layout wrap column class="justify-space-around">
                <v-card light>
                  <v-card-text class="px-5 primary--text">{{ text }}</v-card-text>
                </v-card>
              </v-layout>
            </v-flex>
            <v-flex
              xs12
              md6
              order-xs1
              order-md2
              fill-height
            >
              <v-layout wrap column class="justify-space-around">
                <v-card dark class="elevation-0 transparent">
                  <img :src="item.image" width="100%" class="elevation-3"/>
                </v-card>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
        <!--v-container>
          <v-flex mb-5 sm6>
            <v-container grid-list-xl class="justify-center">
              <v-layout wrap row>
                <v-flex>
                  <img :src="item.image" style="max-height: 400px; max-width: available"/>
                </v-flex>
                <v-flex>
                  <v-container>
                    <v-layout class="headline primary--text">
                      <v-icon class="primary--text" x-large>grade</v-icon>
                      <div class="justify-center">
                        MEHRFACH AUSGEZEICHNET
                      </div>
                    </v-layout>
                  </v-container>
                  <br>
                  <div>{{text}}
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-container-->
      </v-carousel-item>
    </v-carousel>
  </v-jumbotron>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        name: 'overview-carousel',
        text: 'Die Anwendung wurde bei Jugend forscht mit' +
        ' dem 1. Platz im Bereich Mathematik/ Informatik, sowie mit dem Preis' +
        ' "Anwendungsorientierte Arbeit" der IHK Darmstadt und IT FOR WORK ' +
        'ausgezeichnet.',
        items: [
          {
            image: '../static/carousel/team1.jpg'
          },
          {
            image: '../static/carousel/team2.jpg'
          },
          {
            image: '../static/carousel/tablet_team.jpg'
          },
          {
            image: '../static/carousel/tablet1.jpg'
          },
          {
            image: '../static/carousel/screenshotApp1.png'
          }
        ],
        props: {}
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
