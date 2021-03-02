<template>
  <div>
    <div>
      <div class="w-full">
        <client-only>
          <highcharts ref="chart" :options="chartOptions"></highcharts>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      tempList: 'weatherapi/getTemperatureList',
      reloadFlag: 'weatherapi/getReloadChartDataFlag'
      // todo use watcher to trigger using setdata method again when the flag is turned true and commit to make it false || Or just trigger a refresh of the component somehow
    }),
    // Waiting for new requests
    watch: {
      reloadFlag: function(newRequest, oldRequest) {
        // setTimeout(() => {
          // TODO force update if watcher didn't work
        //   this.$forceUpdate();
        // }, 10000)
          // TODO test
        if(newRequest == true) {
          this.setLineChartData()
          this.$store.commit('weatherapi/setReloadChartDataFlag', false)
        }
      }
    },
    data() {
      return {
        chartOptions: {
          title: { text: "Temperature 24hr"
          },
          xAxis: {
            categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            title: {
              text: 'Time'
            }
          },
          yAxis: {
            title: {
              text: 'Degrees'
            }
          },
          series: []
        }
      }
    },
    methods: {
      setLineChartData() {
        this.chartOptions.series === []
        setTimeout(() => {
          console.log(this.tempList)
          this.chartOptions.series.push({
            name: "Chosen Location",
            data: this.tempList,
            tooltip: {
              pointFormat: "Value: {point.y:.0f} C",
            }
        })
        }, 2000)
      }
    },
  }
</script>

<style scoped>

</style>