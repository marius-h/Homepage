<template>
  <v-toolbar
    app
    color="primary"
    dark
    class="elevation-0"
  >
    <v-toolbar-title class="ml-2">
      <router-link to="/" tag="span" style="cursor: pointer">
        <img style="margin-top: 10px" src="/static/logo_small_white.svg" height="50"/>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-title class="ml-1 align-center">
      <span class="hidden-sm-and-down align-baseline">EinfachPunkt</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- class="hidden-xs-only" -->
    <v-toolbar-items class="mr-0">
      <v-menu offset-y>

        <v-btn
          flat
          slot="activator"
        >
          <v-icon left class="hidden-sm-and-down">widgets</v-icon>
          Produkte
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in products" :key="item.icon">

            <v-list-tile-avatar tile size="32">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn
        flat
      >
        <v-icon left class="hidden-sm-and-down">chat</v-icon>
        Kontakt
      </v-btn>
      <v-menu offset-y>

        <v-btn
          flat
          slot="activator"
        >
          <img style="margin-right: 8px" :src="`https://countryflags.io/${flag}/flat/64.png`" width="32"/>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in languages" :key="item.icon" @click="switchLang(item.icon)">

            <v-list-tile-avatar tile size="32">
              <img
                :src="`https://countryflags.io/${item.icon}/flat/64.png`"
                width="24px">
            </v-list-tile-avatar>

            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import i18n from '../../lang/lang'

  export default {
    name: 'toolbar',
    data () {
      return {
        products: [
          {
            icon: 'widgets',
            title: 'Module',
            link: ''
          },
          {
            icon: 'dollar',
            title: 'Preise',
            link: ''
          },
          {
            icon: '',
            title: '',
            link: ''
          },
          {
            icon: '',
            title: '',
            link: ''
          },
          {
            icon: '',
            title: '',
            link: ''
          }
        ],
        languages: [
          {
            icon: 'de',
            title: 'Deutsch'
          },
          {
            icon: 'us',
            title: 'English'
          },
          {
            icon: 'es',
            title: 'Español'
          },
          {
            icon: 'ru',
            title: 'Русский'
          }
        ]
      }
    },
    props: {
      flag: {
        type: String,
        default: 'de'
      }
    },
    methods: {
      switchLang: function (lang) {
        this.flag = lang.toString()
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
      loadLocaleMessage: function (locale, cb) {
        console.log('locale', locale)
        return fetch(`../../lang/translations/${locale}.json`, {
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
    }
  }
</script>
