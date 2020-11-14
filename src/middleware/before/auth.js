export default (to, from, next) => {
  if (to.meta.guestGuard) {
    next({ path: '/' })
  } else {
    next()
  }
}
