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
        src="/static/parallax.png"
      >
        <v-layout
          style="margin-top: 30px"
          column
          align-center
          justify-center
          class="white--text"
        >
          <img src="/static/Schule.svg" height="130px" class="mb-3"/>
          <h4 style="color: #BDBDBD" class="mt-10 mb-3 headline text-xs-center">Die Lösung für Schulen.</h4>
          <v-btn
            class="elevation-0"
            dark
            color="primary"
            large
            round
          >
            {{$t('contact')}}
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Eigenschaften -->
    <section>
      <v-layout
        column
        wrap
        class="my-3"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1 primary--text text--darken-1">Was macht unser System aus?</h2>
          </div>
        </v-flex>

        <v-flex xs12 mb-5>
          <v-container grid-list-xl>
            <v-layout wrap>
              <v-flex v-for="item in shortdesc" :key="item.id" xs12 sm6 md4>
                <v-card flat color="transparent" style="height: auto;">
                  <v-container fluid grid-list-lg>
                    <v-layout row>
                      <v-flex xs2 class="text-xs-center">
                        <v-icon x-large class="primary--text text-xs-center">{{item.icon}}</v-icon>
                      </v-flex>
                      <v-flex>
                        <div class="subheading primary--text mb-3"><strong>{{item.headline}}</strong></div>
                        <p class="secondary--text">{{item.text}}</p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- VORSCHAU -->
    <section>
      <v-carousel
        class="elevation-0"
        hide-delimiters
      >
        <v-carousel-item
          contain
          mouse-drag
          transition="fade"
          reverse-transition="fade"
          v-for="(item,i) in items"
          :src="item.src"
          :key="i"
        ></v-carousel-item>
      </v-carousel>
    </section>

    <!-- ÜBER UNS -->
    <section>
      <v-layout
        column
        wrap
        class="my-3"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1 primary--text text--darken-1">Ihre Ansprechpartner</h2>
          </div>
        </v-flex>
        <v-flex xs12 mb-5>
          <v-container grid-list-xl>
            <v-layout wrap>
              <v-flex v-for="item in team" :key="item.id" xs12 md4>
                <v-card class="elevation-0 transparent ml-5 mr-5" style="height: auto;">
                  <v-card-text class="text-xs-center">
                    <v-avatar
                      :tile="tile"
                      :size="size"
                      class="grey lighten-4"
                    >
                      <img class="landscape" :src="`/static/` + item.avatar + `.png`">
                    </v-avatar>
                  </v-card-text>

                  <v-layout>
                    <v-card-title primary-title class="layout justify-center pt-0">
                      <div class="text-xs-center">
                        <h2 class="headline primary--text">{{item.name}}</h2>
                        <h3 class="subheading secondary--text">{{item.subhead}}</h3>
                      </div>
                    </v-card-title>
                  </v-layout>

                  <div class="layout justify-center">
                    <v-btn
                      outline
                      class="primary"
                      :ripple="{class: 'secondary--text'}"
                      v-bind:href="`mailto:` + item.mail"
                    >
                      <v-icon color="primary" left>mail</v-icon>
                      <div class="primary--text">Kontaktieren</div>
                    </v-btn>
                  </div>

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
        tile: false,
        size: '100px',
        profile_width: '100px',
        // text
        // lists
        items: [
          {
            src: '../static/team1.jpg'
          },
          {
            src: '../static/screenshotApp1.png'
          }
        ],
        shortdesc: [
          {
            icon: 'color_lens',
            headline: 'EINFACHE OBERFLÄCHE',
            text: 'Die Oberflächen der Anwendung wurden so entwickelt, dass sie für' +
            ' jeden Nutzer leicht verständlich sind und keine Einweisungen benötigen'
          },
          {
            icon: 'language',
            headline: 'MEHRSPRACHIG',
            text: 'Die Anwendung wurde bereits in 4 Sprachen übersetzt – Deutsch,' +
            ' Englisch, Spanisch und Russisch'
          },
          {
            icon: 'build',
            headline: 'EINFACHE VERWALTUNG',
            text: 'Die Anwendung verfügt über eine Admin-Oberfläche, über die das' +
            ' gesamte System inklusive Datenbanken leicht verwaltet werden kann.'
          },
          {
            icon: 'grade',
            headline: 'MEHRFACH AUSGEZEICHNET',
            text: 'Die Anwendung wurde im Regionalwettbewerb bei Jugend forscht mit' +
            ' dem 1. Platz im Bereich Mathematik/Informatik, sowie mit dem Preis' +
            ' "Anwendungsorientierte Arbeit" der IHK Darmstadt und IT FOR WORK ' +
            'ausgezeichnet.'
          },
          {
            icon: 'verified_user',
            headline: 'SICHER',
            text: 'Alle Daten sind verschlüsselt und können somit nur mit selbst' +
            ' festgelegten Berechtigungen zugänglich gemacht werden.'
          }
        ],
        team: [
          {
            avatar: 'Marius',
            name: 'Marius Höfler',
            subhead: 'Frontend-Developer',
            mail: 'm.hoefler@einfachpunkt.de'
          },
          {
            avatar: 'laurin',
            name: 'Laurin Dörre',
            subhead: 'Frontend-Developer',
            mail: 'l.doerre@einfachpunkt.de'
          },
          {
            avatar: 'luis',
            name: 'Luis Möller',
            subhead: 'Backend-Developer',
            mail: 'l.moeller@einfachpunkt.de'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .3s ease-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0
</style>
