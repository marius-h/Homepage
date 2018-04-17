<template>
  <div>
    <v-app>
      <v-navigation-drawer
        clipped-right
        temporary
        fixed
        v-model="sideNav"
        app
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>
            <v-list-group
              sub-group
              no-action
              value="true"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
                @click=""
              >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-tile-action>
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
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar
        dark
        color="primary"
        clipped-right
      >
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <!--v-icon>home</v-icon-->
            <img style="margin-top: 10px" src="/static/logo_small_white.svg" height="50"/>
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
              <img style="margin-right: 12px" src="https://countryflags.io/de/flat/32.png" width="32"/>
              <v-icon dark>arrow_drop_down</v-icon>

            </v-btn>
            <v-list>
              <v-list-tile v-for="item in language" :key="item.icon" @click="">

                <v-list-tile-avatar tile size="32" >
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
        <router-view></router-view>
      </main>
      <v-footer dark class="primary" app>
        <span class="white--text">&copy; 2018 by EinfachPunkt</span>
        <v-spacer></v-spacer>
        <v-btn flat>Kontakt</v-btn>
        <h3>|</h3>
        <v-btn flat>Impressum</v-btn>
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
        locale: 'de',
        language: [
          {icon: 'de', title: 'Deutsch'},
          {icon: 'us', title: 'English'},
          {icon: 'es', title: 'Español'},
          {icon: 'ru', title: 'Русский'}
        ],
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
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

