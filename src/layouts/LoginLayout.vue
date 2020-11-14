<template>
  <v-app id="inspire">
    <v-container fluid fill-height class="pa-0 account-container">
      <v-row
        no-gutters
        justify="center"
        align-md="center"
        align-sm="start"
        class="account-row fill-height"
      >
        <v-col sm="12" md="6">
          <v-row no-gutters justify="center" align="center">
            <div class="account-text-container">
              <router-view></router-view>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'login-layout',
  components: {},
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="scss">
body {
  margin: 0 !important;
}
.account-text-container {
  width: 430px;
  padding: 0 15px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  .account-title {
    color: #252525;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin: 0 0 30px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .account-label {
    color: #363838;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 5px;
    display: block;
  }
  .account-input {
    border: 1px solid #1d1d1d;
    background-color: #ffffff;
    color: #000000;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    padding: 10px;
    width: 100%;
  }
  .account-form-element {
    margin-bottom: 20px;
  }
  .account-error {
    font-size: 12px;
    color: #b71c1c;
    text-align: left;
    font-weight: 500;
    margin-top: 5px;
  }
  .input-error {
    border-color: #ef1313;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 5px rgba(177, 74, 71, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 5px rgba(177, 74, 71, 0.6);
  }
  .account-submit {
    background-color: #4f4d4c;
    display: block;
    width: 100%;
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .account-forgot-password {
    display: block;
    margin-top: 20px;
    color: #000000;
    font-size: 11px;
    font-weight: 300;
    line-height: 14px;
    text-align: center;
  }
}
.account-row {
  margin: 0;
  width: 100%;
  background: #fff;
}
.v-sheet.account-card {
  border-radius: 0;
}
@media only screen and (max-width: 960px) {
  .fill-height.account-image-column {
    height: 275px;
  }
  .col .row.no-gutters {
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  .fill-height.account-image-column {
    height: 20vh;
  }
  .v-image.accout-logo {
    max-width: 210px;
  }
}
</style>
