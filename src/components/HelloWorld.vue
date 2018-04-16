<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        <blockquote>
          &#8220;32GB RAM und ein Ultrawide sind wichtig für Webdevelopment.&#8221;
          <footer>
            <small>
              <em>&mdash;Laurin Niclas Dörre</em>
            </small>
          </footer>
        </blockquote>
        {{name}}
      </v-layout>
    </v-slide-y-transition>
  </v-container>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        name: this.news
      }
    }
  }
</script>
