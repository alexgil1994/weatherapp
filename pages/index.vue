<template>
  <div>
    <!-- Header -->
    <div class="mt-16 ml-5 mb-4">
      <h1 class="text-lg text-gray-700">Choose a location</h1>
    </div>
    <!-- Map -->
    <div class="w-full">
      <client-only>
        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 320px">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

            <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
            </vl-layer-tile>
        </vl-map>
      </client-only>
    </div>
    <!-- Location Data -->
    <div class="my-10 flex justify-center">
      <div>
        <h2 class="text-2xl font-normal text-gray-600">Location : Lorem Ipsum</h2>
        <h3 class="text-sm text-gray-900 mt-2">Temperature : Lorem</h3>
        <h3 class="text-sm text-gray-900 mt-2">Humidity : Lorem</h3>
      </div>
    </div>
    <!-- Graph Location Data -->
    <div class="mx-4">
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
        zoom: 5.5,
        center: [2680799.456018, 4615573.515972],
        rotation: 0,
        chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    }
  },
}
</script>

<style>
</style>
