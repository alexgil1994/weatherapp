<template>
  <div>
    <div class="w-full">
      <client-only>
        <vl-map data-projection="EPSG:4326" @click="setClickLocation" ref="map" class="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
            <vl-view ref="view" :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation">
              <vl-geoloc v-if="chosenLocation.length == 0" @update:position="geolocPosition = $event">
                <template slot-scope="geoloc">
                  <vl-feature v-if="geoloc.position" id="position-feature">
                    <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                    <vl-style-box>
                      <vl-style-icon src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" :scale="0.1" :anchor="[0.5, 1]"></vl-style-icon>
                    </vl-style-box>
                  </vl-feature>
                </template>
              </vl-geoloc>
                <template v-else>
                  <vl-feature id="position-feature">
                    <vl-geom-point :coordinates="chosenLocation"></vl-geom-point>
                    <vl-style-box>
                      <vl-style-icon src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" :scale="0.1" :anchor="[0.5, 1]"></vl-style-icon>
                    </vl-style-box>
                  </vl-feature>
                </template>
            </vl-view>
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
        zoom: 6.1,
        center: [23.67858697, 38.23532880],
        rotation: 0,
        geolocPosition: undefined,
        chosenLocation: [],
        pixel: [],
        clickCoordinate: null,
      }
    },
    watch: {
      geolocPosition(newValue, oldValue) {
        if (newValue != undefined) {
          console.log("initttt")
          console.log(newValue)
          this.$store.dispatch('weatherapi/setLocationFetchData', newValue)
        }
      }
    },
    methods: {
      setClickLocation(event) {
        this.clickCoordinate = event.coordinate
        this.chosenLocation = this.clickCoordinate
        console.log(this.clickCoordinate)
        this.$store.dispatch('weatherapi/setLocationFetchData', this.clickCoordinate)
      },
    }
  }
</script>

<style scoped>
.map {
  height: 320px
}

@media only screen and (min-width: 1024px) {
  .map {
    height: 550px
  }
}
</style>