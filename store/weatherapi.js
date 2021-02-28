export const state = () => ({
  locationTemp: null,
  locationHumid: null,
  temperatureList: [],
  humidityList: []
})

export const mutations = {
  setLocationTemp (state, data) {
    state.locationTemp = data
  },
  setLocationHumid (state, data) {
    state.locationHumid = data
  },
  setTemperatureList (state, data) {
    state.temperatureList = data
  },
  setHumidityList (state, data) {
    state.humidityList = data
  },
  sortTempListAsc (state) {
    state.temperatureList.sort(function(a, b){return a-b})
  },
  sortTempListDesc (state) {
    state.temperatureList.sort(function(a, b){return b-a})
  },
}

export const actions = {
  async fetchLocationWeather ( { commit, dispatch } ) { // TODO CHECK
    // The api requests long and lat to be in degrees type of value
    // TODO LONG LAT MUST BE AS DEGREES VALUES
    await this.$axios.$get('https://api.draxis.gr/weather/meteo/hourly', { params: { apikey: "4181a631-652a-40a2-a57f-e8338074cc5a", resolution: "6km", lat: 39.0742, lon: 21.8243, at_date: "2021-02-28"}
  } )
    .then(result => {
      console.log(result);
      // commit('setLocationTemp', result)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    })
  },
}

export const getters = {
  getLocationTemp (state) {
    return state.locationTemp
  },
  getLocationHumid (state) {
    return state.locationHumid
  },
  getTemperatureList (state) {
    return state.temperatureList
  },
  getHumidityList (state) {
    return state.humidityList
  }
}