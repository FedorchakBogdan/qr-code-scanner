import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#1a93bd',
        secondary: '#8CC878',
        error: '#E87676',
        white: '#E5E5E5'
      }
    }
  }
}

export default new Vuetify(opts)
