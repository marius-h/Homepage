<template>
  <v-content>
    <v-jumbotron
      dark
      gradient="to bottom, #0D47A1, #2A5DAC"
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
          <div class="display-3" style="font-family: 'PT Sans', sans-serif;">Kontakt</div>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card flat class="transparent">
            <v-card-text>
              <v-form
                v-model="valid"
                ref="form"
                lazy-validation
              >
                <v-select
                  label="Anrede"
                  v-model="title"
                  :items="titles"
                  :rules="[v => !!v || 'Anrede wird für den Kontakt benötigt']"
                  required
                ></v-select>
                <v-text-field
                  label="Vorname"
                  v-model="firstname"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Nachname"
                  v-model="lastname"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Ihre Nachricht"
                  v-model="message"
                  :rules="messageRules"
                  multi-line
                  required
                ></v-text-field>

                <v-btn
                  dark
                  class="primary"
                  @click="submit"
                  :disabled="!valid"
                >
                  Einreichen
                </v-btn>
                <v-btn dark class="primary" @click="clear">Zurücksetzen</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        valid: true,
        title: null,
        titles: [
          'Herr',
          'Frau',
          'Dipl. Ing.',
          'Prof.',
          'Prof. Dr.',
          'Herr Dr.',
          'Frau Dr.'
        ],
        firstname: '',
        lastname: '',
        nameRules: [
          v => !!v || 'Ihr Name wird für den Kontakt benötigt'
        ],
        email: '',
        emailRules: [
          v => !!v || 'Ihre E-mail wird für dem Kontakt benötigt',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail ist ungültig'
        ],
        message: '',
        messageRules: [
          v => !!v || 'Bitte beschreiben Sie kurz Ihr Anliegen'
        ]
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          /*
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
          */
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
