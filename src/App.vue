<template>
  <div>
    <v-app>
      <v-navigation-drawer
        temporary
        v-model="sideNav"
        app
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>perm_contact_calendar</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-btn flat>News</v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark color="primary">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <v-icon>home</v-icon>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat>
            <v-icon dark left>language</v-icon>
            language
          </v-btn>
          <v-btn flat router
                 to="news">
            <v-icon dark left>perm_contact_calendar</v-icon>
            News
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-items class="hidden-sm-and-up">
          <v-btn icon flat>
            <v-icon dark left>language</v-icon>
          </v-btn>
          <v-btn icon flat router
                 to="news">
            <v-icon dark left>perm_contact_calendar</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <main>
        <router-view></router-view>
      </main>
      <v-footer dark class="primary" fixed app>
        <span>&copy; 2018 by einfachpunkt</span>
        <v-spacer></v-spacer>
        <v-btn flat v-lang.contact_us></v-btn>
        <h3>|</h3>
        <v-btn flat v-lang.news></v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        languageSlider: false,
        sideNav: false,
        menuItems: [
          {icon: 'perm_contact_calendar', title: 'Deutsch'},
          {icon: 'perm_contact_calendar', title: 'English'},
          {icon: 'perm_contact_calendar', title: 'Español'},
          {icon: 'perm_contact_calendar', title: 'Русский'}
        ],
        language: [
          {icon: 'perm_contact_calendar', title: 'Deutsch'},
          {icon: 'perm_contact_calendar', title: 'English'},
          {icon: 'perm_contact_calendar', title: 'Español'},
          {icon: 'perm_contact_calendar', title: 'Русский'}
        ]
      }
    }
  }
</script>


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

  a {
    color: #42b983;
  }
</style>

