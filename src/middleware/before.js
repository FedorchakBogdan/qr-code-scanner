import { store } from '../store/index'
import guest from './before/guest'
import auth from './before/auth'
import allow from './before/allow'

export default (to, from, next) => {
  if (store.state.auth.jwt) {
    auth(to, from, next)
    allow(to, from, next)
  } else {
    guest(to, from, next)
  }
}
