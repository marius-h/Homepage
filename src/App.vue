<template>
  <v-fade-transition appear>
    <div>
      <v-app>
        <toolbar></toolbar>

        <app-fab></app-fab>

        <!--transition :name="transitionName">
        </transition-->
        <router-view></router-view>

        <v-spacer></v-spacer>

        <v-footer
          height="auto"
          class="primary grey darken-1">
          <v-layout row wrap justify-center>
            <v-btn
              dark
              flat
              v-for="link in links"
              :key="link.route"
              :to="link.route"
            >
              {{ link.text }}
            </v-btn>
            <v-flex xs12 py-3 text-xs-center white--text>
              &copy;{{new Date().getFullYear()}} — <strong>EinfachPunkt</strong>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-app>
    </div>
  </v-fade-transition>
</template>

<script>
  import Toolbar from './components/AppToolbar'
  import AppFab from './components/AppFab'

  export default {
    components: { AppFab, Toolbar },
    data () {
      return {
        transitionName: 'slide-left',
        languageSlider: false,
        sideNav: false,
        /*
        navItems: [
          {
            title_icon: 'book',
            title: 'Terminverwaltung',
            items: [
              { page: 'timetable', icon: 'access_time' },
              { page: 'substitution_table', icon: 'timelapse' },
              { page: 'schedule', icon: 'chrome_reader_mode' },
              { page: 'marks', icon: 'book' },
              { page: 'parent-teacher_meeting', icon: 'wc' },
              { page: 'meetings', icon: 'people' },
              { page: 'exam', icon: 'bookmark' }
            ]
          },
          {
            title_icon: 'book',
            title: 'Raumverwaltung',
            items: [
              { page: 'canteen', icon: 'local_pizza' },
              { page: 'conference_room', icon: 'supervisor_account' },
              { page: 'auditorium', icon: 'highlight' },
              { page: 'library', icon: 'local_library' },
              { page: 'doorplate', icon: 'assignment_late' }
            ]
          }
        ],
        time_management: [],
        */
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ],
        links: [
          { text: 'Startseite', route: '/' },
          { text: 'Über uns', route: '/aboutus' },
          { text: 'Kontakt', route: '/contact' },
          { text: 'Impressum', route: '/impress' }
        ]
      }
    },
    beforeRouteUpdate (to, fr, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = fr.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    }
  }
</script>

<style lang="stylus">
  #app-toolbar
    .toolbar__title
      margin-left .5em
      font-weight 300
      font-size 21px
      position relative
      top 1px
    .toolbar__items
      .btn
        text-transform capitalize
        font-size 16px
        font-weight 300
</style>

<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #ffffff;
    font-size: 25px;
  }

  span {
    margin-left: 4px;

  }

  h3 {
    font-size: 25px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>

