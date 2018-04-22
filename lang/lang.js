import Vue from 'vue'
import VueI18n from 'vue-i18n'
import de from '../lang/translations/de'
import en from './translations/us'

Vue.use(VueI18n)

const locale = 'de'

const messages = {
  de: de,
  en: en
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
