import { camelActual } from '../utils/helpers'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import de from '../lang/de'
import * as langs from '../lang'

/*
Vue.use(VueI18n)

export function createI18n (ssrContext) {
  let locale = 'de'

  if (ssrContext && ssrContext.lang) {
    locale = ssrContext.lang
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang
  }

  const localePath = camelActual(locale)
  const messages = { de }

  if (locale !== 'de' && langs[localePath]) {
    messages[locale] = langs[localePath]
  }

  return new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages
  })
}
*/
