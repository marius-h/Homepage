<template>
  <div>
    <v-app>
      <v-navigation-drawer
        fixed
        permanent
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        v-model="sideNav"
      >
        <v-list>
          <v-layout
            column
            wrap
            align-center
            class="my-3"
          >
            <img src="../static/Schule.svg" height="70px" style="width: auto"/>
          </v-layout>

          <v-list-group
            v-model="item.active"
            v-for="item in navItems"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.page }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <!--v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            prepend-icon="view_compact"
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Module</v-list-tile-title>
            </v-list-tile>
            <v-list-group
              sub-group
              no-action
              value="true"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Terminverwaltung</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                v-for="(tile, i) in time_management"
                :key="i"
                @click=""
              >
                <v-list-tile-action>
                  <v-icon left>{{tile.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{tile.page}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-group
              sub-group
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                v-for="(crud, i) in cruds"
                :key="i"
                @click=""
              >
                <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list-group-->
        </v-list>
      </v-navigation-drawer>

      <v-toolbar
        app
        color="primary"
        dark
        :clipped-left="$vuetify.breakpoint.lgAndUp"
      >
        <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <!--v-icon>home</v-icon-->
            <img style="margin-top: 10px" src="/static/logo_small_white.svg" height="50"/>
          </router-link>
        </v-toolbar-title>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3 align-center">
          <span class="hidden-sm-and-down align-baseline">Startseite</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- class="hidden-xs-only" -->
        <v-toolbar-items>
          <v-menu offset-y>
            <v-btn
              flat
              slot="activator"
            >
              <img style="margin-right: 8px" :src="`https://countryflags.io/${flag}/flat/32.png`" width="32"/>
              <v-icon dark>keyboard_arrow_down</v-icon>

            </v-btn>
            <v-list>
              <v-list-tile v-for="item in language" :key="item.icon" @click="switchLang(item.icon)">

                <v-list-tile-avatar tile size="32">
                  <img
                    :src="`https://countryflags.io/${item.icon}/flat/32.png`"
                    width="24px">
                </v-list-tile-avatar>

                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

        </v-toolbar-items>
      </v-toolbar>

      <main>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </main>

      <v-footer
        inset
        height="auto"
        class="primary grey darken-1">
        <v-layout row wrap justify-center>
          <v-btn
            color="white"
            flat
            v-for="link in links"
            :key="link"
          >
            {{ link }}
          </v-btn>
          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;{{new Date().getFullYear()}} — <strong>EinfachPunkt</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  import i18n from '../lang/lang'
  import store from './store'

  export var flag = 'de'

  export default {
    data () {
      return {
        languageSlider: false,
        sideNav: false,
        flag: 'de',
        language: [
          { icon: 'de', title: 'Deutsch' },
          { icon: 'us', title: 'English' },
          { icon: 'es', title: 'Español' },
          { icon: 'ru', title: 'Русский' }
        ],
        navItems: [
          {
            title_icon: 'book',
            title: 'Terminverwaltung',
            items: [
              { page: 'Stundenplan', icon: 'people_outline' },
              { page: 'Vertretungsplan', icon: 'people_outline' },
              { page: 'Kursbuch', icon: 'chrome_reader_mode' },
              { page: 'Notenbuch', icon: 'book' },
              { page: 'Elternsprechtag', icon: 'wc' },
              { page: 'Versammlungen', icon: 'people_outline' },
              { page: 'Klausuren', icon: 'people_outline' }
            ]
          }
        ],
        time_management: [

        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ],
        links: [
          'Startseite',
          'Über uns',
          'Kontakt',
          'Impressum'
        ]
      }
    },
    methods: {
      switchLang: function (lang) {
        //  flag = lang
        if (lang in i18n.messages) {
          console.log('no ajax')
          this.$i18n.locale = lang
        } else {
          this.loadLocaleMessage(lang, (err, message) => {
            if (err) {
              console.error(err)
              return
            }
            i18n.setLocaleMessage(lang, message)
            this.$i18n.locale = lang
          })
        }
      },
      setLang: function (lang) {
        flag = lang
        //  locale = lang
        store.dispatch('setLang', lang)
      },
      loadLocaleMessage: function (locale, cb) {
        console.log('locale', locale)
        return fetch(`../lang/translations/${locale}.json`, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log('success')
          return res.json()
        }).then((json) => {
          if (Object.keys(json).length === 0) {
            return Promise.reject(new Error('locale empty !!'))
          } else {
            return Promise.resolve(json)
          }
        }).then((message) => {
          cb(null, message)
        }).catch((error) => {
          cb(error)
        })
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
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

