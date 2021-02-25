<template>
  <div>
    <div>
      <div class="w-full">
        <client-only>
          <highcharts :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chartOptions: {
          series: [
            {
              data: [1, 2, 3, 5, 2, 4, 8, 4, 2, 1, 5]
            }
          ]
        }
      }
    },
  }
</script>

<style scoped>

</style>