<template>
  <div>
    <v-app>
      <v-navigation-drawer
        temporary
        v-model="sideNav"
        app
      >
        <v-list>
          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark color="primary">
        <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <v-icon>home</v-icon>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            flat
            color="white--text"
            dark
            slot="activator"
            v-bind:v-click="languageSlider = !languageSlider"
          >Sprache ändern</v-btn>
          <v-menu bottom offset-y :close-on-content-click='true'>

            <v-list light="true">
              <v-list-tile v-for="(item, i) in language" :key="i" v-model="languageSlider" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <!--v-toolbar-items class="hidden-xs-only">
          <v-menu
            bottom
            left
          >
            <v-btn
              flat
              @click="languageSlider = !languageSlider"
              v-lang.change_lang
              slot="activator"
            >Dropdown
            </v-btn>

            <v-list>
              <v-list-tile
                icon
                v-for="(item, i) in language"
                :key="i"
                @click=""
              >
                <v-icon>{{ item.icon }}</v-icon>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items-->
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

