const Login = () => import('@views/auth/Login.vue')
const jwt = localStorage.getItem('jwt')

const redirect = (to, from, next) => {
  if (jwt) {
    next({ path: '/' })
  } else {
    next()
  }
}

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    beforeEnter: redirect,
    meta: {
      guestGuard: true,
      title: 'Login',
      layout: 'login'
    }
  }
]
