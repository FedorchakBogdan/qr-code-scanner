<template>
  <div class="auth-form">
    <h1 class="account-title">Login</h1>
    <form v-on:submit.prevent="loginHandler" id="login-form">
      <div class="account-form-element">
        <label class="account-label">Enter username</label>
        <v-text-field
          class="fm-input"
          type="email"
          placeholder="Username entered here"
          required
          v-model="login"
        />
        <div class="account-error" role="alert">
          <div></div>
        </div>
      </div>
      <div class="account-form-element">
        <label class="account-label">Enter Password</label>
        <v-text-field
          class="fm-input"
          type="password"
          placeholder="Password entered here"
          required
          v-model="password"
        />
        <div class="account-error" role="alert">
          <div></div>
        </div>
      </div>
      <v-row>
        <v-col cols="12">
          <v-btn
            type="submit"
            block
            form="login-form"
            class="fm-button-primary"
          >
            Log In
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    login: null,
    password: null
  }),
  methods: {
    ...mapActions('auth', ['setToLocalStorage']),
    loginHandler () {
      this.setToLocalStorage({
        key: 'jwt',
        value: this.utf8ToBase64(`${this.login}:${this.password}`)
      })
      this.$router.push({ name: 'scan.index' })
    },
    utf8ToBase64 (str) {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
  }
}
</script>
