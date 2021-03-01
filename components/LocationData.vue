<template>
  <div>
    <div class="flex justify-center md:justify-start">
      <div>
        <h2 class="text-2xl lg:text-3xl font-normal text-gray-600">Location</h2>
        <h3 class="text-sm lg:text-base text-gray-600 font-normal mt-2">Temperature <span class="ml-4 mr-2">:</span> <span class="text-xl font-medium">{{ locTemp }} C</span></h3>
        <h3 class="text-sm lg:text-base text-gray-600 font-normal mt-2">Humidity <span class="ml-10 mr-2">:</span> <span class="text-xl font-medium">{{ locHumid }} %</span></h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      locTemp: 'weatherapi/getLocationTemp',
      locHumid: 'weatherapi/getLocationHumid',
    }),
    mounted () {
      this.$store.dispatch('weatherapi/fetchLocationWeatherLive')
    },
  }
</script>

<style scoped>

</style>