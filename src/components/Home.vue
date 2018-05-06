<template>
  <v-content>
    <!-- Header -->
    <section>
      <v-jumbotron
        dark
        :gradient="gradient"
        height="auto"
      >
        <v-container
          fill-height
          class="my-3"
        >
          <v-layout
            align-center
            justify-center
            column
            wrap
          >
            <img
              src="/static/SchuleWhite.svg"
              alt="Logo"
              width="256px"
              class="mx-4"
            />
            <div class="secondary--text headline mt-2" style="font-family: 'PT Sans', sans-serif;">Die Lösung für
              Schulen
            </div>
          </v-layout>
        </v-container>

        <v-container
          grid-list-xl
          style="max-width: 1280px"
          class="mb-5"
        >
          <v-layout
            row
            wrap
            justify-center
          >
            <v-flex
              d-flex
              xs12 sm6 md4 lg4
              v-for="(feature, i) in philosophy_items"
              :key="feature.headline"
            >
              <v-card
                light
                style="max-width: 375px;"
                class="elevation-24 hide-overflow"
              >
                <v-card-title align-center class="pb-0">
                  <v-spacer></v-spacer>
                  <v-icon
                    x-large
                    class="primary--text text-xs-center justify-center align-center"
                  >{{feature.icon}}
                  </v-icon>
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-card-text class="pb-0">
                  <h3
                    v-text="feature.headline"
                    style="font-size: 18px; font-weight: 500;"
                    class="text-xs-center mb-3 primary--text"
                  ></h3>
                  <p class="text-xs-center">{{ feature.text }}</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-spacer></v-spacer>
                  <v-btn flat class="transparent primary--text">
                    {{ feature.action }}
                    <v-icon right>arrow_forward</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </v-jumbotron>
    </section>

    <!--section>
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
          <h4 style="color: #BDBDBD" class="mt-10 mb-3 headline text-xs-center">Die Lösung für Schulen</h4>
          <v-btn
            depressed
            dark
            color="primary"
            large
            round
            :to="'/contact'"
          >
            {{ $t('contact') }}
          </v-btn>
        </v-layout>
      </v-parallax>
    </section-->

    <!-- Motto -->
    <section class="elevation-0">
      <v-layout
        column
        wrap
        class="py-3"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-1 primary--text">WIR MACHEN SCHULE EINFACH</h2><br>
            <v-flex xs12 mb-4>
              <div class="secondary--text" style="max-width: 600px; font-size: 17px">
                Das Verwalten von Schulen stellt sich immer wieder als eine Herausforderung heraus -
                doch was, wenn diese Probleme alle auf einen Schlag beseitigt wären? Im Zeitalter der Digitalisierung
                ist dies möglich.
              </div>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section class="mb-5 align-center">
      <v-container grid-list-xs style="max-width: 600px;">
        <v-layout row wrap>
          <v-flex
            sm12 md6
            fluid
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-layout
              align-center
              class="my-2"
            >
              <v-icon
                color="primary"
                size="36px"
                class="mr-3"
              >check
              </v-icon>
              <span class="subheading">{{ feature }}</span>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- Philosophie -->
    <!--section class="elevation-0">
      <v-layout
        column
        wrap
        class="py-3"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline primary--text text--darken-1">UNSERE PHILOSOPHIE</h2>
          </div>
        </v-flex>

        <v-flex xs12 mb-4>
          <v-container grid-list-xl>
            <v-layout wrap>
              <v-flex
                v-for="item in philosophy_items"
                :key="item.id"
                xs12
                sm6
                md4
              >
                <v-card
                  flat
                  color="transparent"
                  style="height: auto;"
                >
                  <v-container
                    fluid
                    grid-list-lg
                  >
                    <v-layout row>
                      <v-flex
                        xs2
                        class="text-xs-center">
                        <v-icon
                          x-large
                          class="primary--text text-xs-center"
                        >{{item.icon}}
                        </v-icon>
                      </v-flex>
                      <v-flex>
                        <div class="subheading primary--text mb-3"><strong>{{item.headline}}</strong></div>
                        <p class="secondary--text">{{item.text}}</p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <v-card-actions class="my-0 py-0">
                    <v-spacer></v-spacer>
                    <v-btn flat class="transparent primary--text">
                      Mehr erfahren
                      <v-icon right>arrow_forward</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section-->

    <!-- VORSCHAU -->
    <section>
      <!--v-parallax
        src="/static/parallax.png"
      >

      </v-parallax-->
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <overview-carousel></overview-carousel>
      </v-layout>
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
            <h2 class="display-1 primary--text text--darken-1">UNSER TEAM</h2>
          </div>
        </v-flex>
        <v-flex xs12 mb-5>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex v-for="item in team" :key="item.id" xs12 md4>
                <v-card class="elevation-0 transparent mx-5" style="height: auto;">
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
  import OverviewCarousel from './AppCarousel'

  export default {
    name: 'Home',
    components: { OverviewCarousel },
    data () {
      return {
        tile: false,
        size: '100px',
        profile_width: '100px',
        gradient: 'to bottom, #0D47A1, #2A5DAC',
        // lists
        philosophy_items: [
          {
            icon: 'color_lens',
            headline: 'EINFACHE OBERFLÄCHE',
            text: 'Die moderne, intuitive Oberfläche erlaubt es jedem, sich leicht zurechtzufinden.',
            action: 'Zur Galerie'
          },
          {
            icon: 'widgets',
            headline: 'HOHE FLEXIBILITÄT',
            text: 'Sie entscheiden, was Sie brauchen - dadurch' +
            ' bleiben Schulen unnötig hohe Kosten erspart.',
            action: 'Unsere Produkte'
          },
          {
            icon: 'update',
            headline: 'ZUKUNFTSSICHER',
            text: 'Bleiben Sie immer auf dem neuesten Stand der Technik und schließen Sie sich der Digitalisierung an.',
            action: 'Aktuelles'
          }
        ],
        features: [
          'Elternsprechtage organisieren',
          'Arbeitsaufträge verwalten',
          'Mobile Kursbücher',
          'Klausurplaner',
          'Stunden- und Vertretungspläne',
          'Intelligente Türschilder',
          'Schulbuchverleih',
          'und vieles mehr...'
        ],
        news_items: [
          {
            icon: 'language',
            headline: 'MEHRSPRACHIG',
            text: 'Die Anwendung wurde bereits in 4 Sprachen übersetzt – Deutsch,' +
            ' Englisch, Spanisch und Russisch'
          },
          {
            icon: 'grade',
            headline: 'MEHRFACH AUSGEZEICHNET',
            text: 'Die Anwendung wurde bei Jugend forscht mit' +
            ' dem 1. Platz im Bereich Mathematik/ Informatik, sowie mit dem Preis' +
            ' "Anwendungsorientierte Arbeit" der IHK Darmstadt und IT FOR WORK ' +
            'ausgezeichnet.'
          },
          {
            icon: 'verified_user',
            headline: 'SICHER',
            text: 'Alle Daten sind verschlüsselt und können somit nur mit selbst' +
            ' festgelegten Berechtigungen zugänglich gemacht werden.'
          },
          {
            icon: 'build',
            headline: 'EINFACHE VERWALTUNG',
            text: 'Die Anwendung verfügt über eine Admin-Oberfläche, über die das' +
            ' gesamte System inklusive Datenbanken leicht verwaltet werden kann.'
          }
        ],
        team: [
          {
            avatar: 'Marius',
            name: 'Marius Höfler',
            subhead: 'Frontend-Entwickler',
            mail: 'm.hoefler@einfachpunkt.de'
          },
          {
            avatar: 'laurin',
            name: 'Laurin Dörre',
            subhead: 'Frontend-Entwickler',
            mail: 'l.doerre@einfachpunkt.de'
          },
          {
            avatar: 'luis',
            name: 'Luis Möller',
            subhead: 'Backend-Entwickler',
            mail: 'l.moeller@einfachpunkt.de'
          }
        ]
      }
    },
    head: {
      title: {
        inner: 'Home'
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
