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

        <!-- class="hidden-xs-only" -->
        <v-toolbar-items>

          <v-menu offset-y>
            <v-btn
              flat
              slot="activator"
              style="min-width: 64px">
              <img :src="`https://countryflags.io/us/flat/24.png`" height="24" width="24"/>
              language
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in language" :key="item.title" @click="">

                <v-list-tile-avatar tile size="24px" >
                  <img
                  :src="`https://countryflags.io/${item.icon}/flat/24.png`"
                  width="24px">
                </v-list-tile-avatar>

                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

           <!--menu + vclick-->
          <v-btn
            flat
            router
            to="news"
          >
            <v-icon dark left>perm_contact_calendar</v-icon>
            News
          </v-btn>
        </v-toolbar-items>
        <!--
        <v-toolbar-items class="hidden-sm-and-up">
        </v-toolbar-items>
        -->
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
          {icon: 'us', title: 'Deutsch'},
          {icon: 'de', title: 'English'},
          {icon: 'es', title: 'Español'},
          {icon: 'pl', title: 'Русский'}
        ],
        language: [
          {icon: 'de', title: 'Deutsch'},
          {icon: 'us', title: 'English'},
          {icon: 'es', title: 'Español'},
          {icon: 'pl', title: 'Русский'}
        ]
      }
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

