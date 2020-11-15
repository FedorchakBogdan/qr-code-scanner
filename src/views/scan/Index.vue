<template>
  <v-row justify="space-around">
    <v-col cols="12" md="6" class="scan_block">
        <h1>QR Code Scanner</h1>
        <Scanner
          @successScanner="scannerSuccessHandler"
        />
    </v-col>
  </v-row>
</template>

<script>
import Scanner from '@/components/Scanner'
export default {
  name: 'Index',
  components: {
    Scanner
  },
  methods: {
    scannerSuccessHandler (data) {
      this.$router.push({ name: 'products.edit', params: { result: data } })
    }
  }
}
</script>

<style scoped lang="scss">
.scan_block{
  text-align: center;
}
</style>
