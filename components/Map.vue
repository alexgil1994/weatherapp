<template>
  <div>
    <div class="w-full">
      <client-only>
        <vl-map class="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
            <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
            </vl-layer-tile>
        </vl-map>
      </client-only>
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
      }
    },
  }
</script>

<style scoped>
.map {
  height: 320px;
}

@media only screen and (min-width: 1024px) {
  .map {
    height: 550px;
  }
}
</style>