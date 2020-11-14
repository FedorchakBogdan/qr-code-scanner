export default {
  namespaced: true,
  state: {
    jwt: localStorage.getItem('jwt') || null
  },
  mutations: {
    setJwt: (state) => {
      state.jwt = localStorage.getItem('jwt')
    }
  },
  actions: {
    setToLocalStorage: ({ commit }, { key, value }) => {
      localStorage.setItem(key, value)
      commit('setJwt', { key: key, value: value })
    },
    logout: ({ commit }, key) => {
      localStorage.removeItem(key)
    }
  }
}
