<template>
  <!--section>
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
            style="-webkit-filter: blur(3px)" width="2000"/>
      </v-carousel-item>
    </v-carousel>
  </section-->

  <v-content>
    <section>
      <v-parallax
        src="/static/tablet.jpg"
      >
        <v-layout
          style="margin-top: 30px"
          column
          align-center
          justify-center
          class="white--text"
        >
          <img src="/static/Schule.svg" height="130px"/>
          <h3 style="color: #BDBDBD" class="mt-10 mb-3 display-1 text-xs-center">- Die einfache Lösung für Schulen -</h3>
          <div class="subheading mb-3 text-xs-center">oe-team</div>
          <v-btn
            class="elevation-0"
            dark
            color="primary"
            large
            href="/wirkommenvorbei"
          >
            Vorstellungstermin vereinbaren
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Die einfachste Möglichkeit zur Organisation von Elternsprechtagen</h2>
          </div>
        </v-flex>
        <v-flex xs9>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="item in shortdesc" :key="item.id" xs11 md3>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">{{item.icon}}</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">{{item.headline}}</div>
                  </v-card-title>
                  <v-card-text>{{ item.text}}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-carousel hide-controls :hide-delimiters=toggledeli interval="9000">
        <v-carousel-item
          mouse-drag="false"
          transition="Slide"
          reverse-transition="Slide"
          v-for="(item,i) in items"
          :src="item.src"
          :key="i"></v-carousel-item>
      </v-carousel>
    </section>

    <section>
      <v-layout

        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">UNSER TEAM</h2>
            <span class="subheading">
                maybe subheader?
              </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="item in team" :key="item.id" xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-avatar
                      :tile="tile"
                      :size="size"
                      class="grey lighten-4"
                    >

                      <img class="landscape" :src="`/static/` + item.avatar + `.png`">

                    </v-avatar>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      <h2 class="headline">{{item.name}}</h2>
                      <h3 class="subheading">
                        {{item.subhead}}
                      </h3>
                    </div>

                  </v-card-title>
                  <v-card-text style="">{{ item.text}}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </v-content>

</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        toggledeli: true,
        tile: false,
        size: '100px',
        items: [
          {
            src: '../static/Circle1TEST.png'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
          }
        ],
        shortdesc: [
          {
            icon: 'color_lens',
            headline: 'EINFACHE OBERFLÄCHE',
            text: 'Die Oberflächen der Anwendung wurden so entwickelt, dass sie für jeden Nutzer leicht verständlich sind und keine Einweisungen benötigen'
          },
          {
            icon: 'language',
            headline: 'MEHRSPRACHIG',
            text: 'Die Anwendung wurde bereits in 4 Sprachen übersetzt – Deutsch, Englisch, Spanisch und Russisch'
          },
          {
            icon: 'build',
            headline: 'EINFACHE VERWALTUNG',
            text: 'Die Anwendung verfügt über eine Admin-Oberfläche, über die das gesamte System inklusive Datenbanken leicht verwaltet werden kann.'
          },
          {
            icon: 'grade',
            headline: 'AUSZEICHNUNGEN',
            text: 'Die Anwendung wurde im Regionalwettbewerb bei Jugend forscht mit dem 1. Platz im Bereich Mathematik/Informatik ausgezeichnet.'
          }
        ],
        team: [
          {
            avatar: 'Marius',
            name: 'Marius Höfler',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun ut labore orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun ue',
            subhead: 'Android-Development'
          },
          {
            avatar: 'laurin',
            name: 'Laurin Dörre',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun u',
            subhead: 'Web-Development'
          },
          {
            avatar: 'luis',
            name: 'Luis Möller',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun u',
            subhead: 'Backend-Development'
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
