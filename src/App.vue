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
          <router-link to="/" tag="span" style="cursor: pointer"><v-icon>home</v-icon></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            dark
            flat
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
            v-bind:onclick="languageSlider = !languageSlider"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-menu
        origin="center center"
        transition="scale-transition"
        bottom

      >
        <v-list>
          <v-list-tile v-for="item in language" v-model="languageSlider">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>


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
          {icon: 'perm_contact_calendar', title: 'News', link: '/News'},
          {icon: 'language', title: 'Language', link: 'languageSlider'}
        ],
        language: [{}]
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

