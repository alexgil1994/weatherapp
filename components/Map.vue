<template>
  <div>
    <div @click="getPixel($event)" class="w-full">
      <client-only>
        <vl-map ref="map" class="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
            <vl-view ref="view" :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation">
              <vl-geoloc @update:position="geolocPosition = $event">
                <template slot-scope="geoloc">
                  <vl-feature v-if="geoloc.position" id="position-feature">
                    <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                    <vl-style-box>
                      <vl-style-icon src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" :scale="0.1" :anchor="[0.5, 1]"></vl-style-icon>
                    </vl-style-box>
                  </vl-feature>
                </template>
              </vl-geoloc>
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
        zoom: 5.5,
        center: [2680799.456018, 4615573.515972],
        rotation: 0,
        geolocPosition: undefined,
        pixel: {
          pixelX: '',
          pixelY: ''
        }
      }
    },
    methods: {
      getPixel(event) {
        console.log(event.screenX);
        console.log(event.screenY);
        this.pixel.pixelX = event.screenX
        this.pixel.pixelY = event.screenY
        console.log(this.geolocPosition)
        // this.$refs.map.render()
        // this.$refs.map.refresh()
        // console.log(this.$refs.map.getCoordinateFromPixel(this.pixel))
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