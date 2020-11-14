<template>
  <v-app id="inspire" class="brg-app">
    <Navbar />
    <v-main>
      <v-main
        fluid
        class="position-relative pt-0 pb-0"
        color="#EFF1F4"
      >
        <v-row
          align="center"
          justify="center"
          class="main-content-container gd-container"
        >
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-main>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.brg-app {
  .v-content {
    background-color: #fffdfdfd;
  }
}

.contentgd {
  padding: 100px 0 0 250px !important;
}

.smallcontentgd {
  padding: 100px 154px 0 154px !important;
}

.v-snack__content {
  border: 1px solid #1a93bd !important;
  border-radius: 5px;
}

</style>
