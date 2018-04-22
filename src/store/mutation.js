import { app } from '../main'
import * as types from './mutation-types'

export const state = {
  lang: 'de'
}

export const mutations = {
  [types.SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
}

export const actions = {
  setLang ({ commit }, payload) {
    commit(types.SET_LANG, payload)
  },
  async setLangNew ({ commit }, payload) {
    if (payload in app.$i18n.messages) {
      commit(types.SET_LANG, payload)
    } else {
      try {
        //  const res = await axios.get(`./src/lang/${payload}.json`)
        //  const res = await axios.get(`../../src/lang/${payload}.json`)
        //  const res = await import(`lang/translations/${payload}.json`)
        //  app.$i18n.setLocaleMessage(payload, res.data)
        commit(types.SET_LANG, payload)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
