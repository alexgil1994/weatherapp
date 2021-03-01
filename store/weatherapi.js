export const state = () => ({
  // todo to be swapped with the hardcoded coordinates on the request, setting it through the map component on click
  reloadChartDataFlag: false,
  location: null,
  locationTemp: null,
  locationTempMin: null,
  locationTempMax: null,
  locationHumid: null,
  temperatureList: [],
  tempTimeList: []
})

export const mutations = {
  setLocationTemp (state, data) {
    state.locationTemp = data
  },
  setLocationTempMin (state, data) {
    state.locationTempMin = data
  },
  setLocationTempMax (state, data) {
    state.locationTempMax = data
  },
  setLocationHumid (state, data) {
    state.locationHumid = data
  },
  setTemperatureList (state, data) {
    state.temperatureList = data
  },
  setTempTimeList (state, data) {
    state.tempTimeList = data
  },
  sortTempListAsc (state) {
    state.temperatureList.sort(function(a, b){return a-b})
  },
  sortTempListDesc (state) {
    state.temperatureList.sort(function(a, b){return b-a})
  },
}

export const actions = {
  async fetchLocationWeatherLive ( { commit, dispatch } ) {
    // The api requests long and lat to be in degrees type of value
    // TODO LONG LAT MUST BE AS DEGREES VALUES
    await this.$axios.$get('https://api.draxis.gr/weather/meteo/hourly', { params: { apikey: "4181a631-652a-40a2-a57f-e8338074cc5a", resolution: "6km", lat: 39.0742, lon: 21.8243, at_date: new Date().toISOString().substring(0,13)}
  } )
    .then(result => {
      console.log(result);
      // TODO CHECK WHY TIME IS 2 HOURS BACK THAN ACTUAL
      const temp = Math.trunc(Object.values(result.temperature2m.data))
      const humid = Math.trunc(Object.values(result.rh2m.data))
      console.log(temp);
      console.log(humid);
      commit('setLocationTemp', temp)
      commit('setLocationHumid', humid)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    })
  },
  async fetchLocationWeather24hr ( { commit, dispatch } ) {
    // The api requests long and lat to be in degrees type of value
    // TODO LONG LAT MUST BE AS DEGREES VALUES
    await this.$axios.$get('https://api.draxis.gr/weather/meteo/hourly', { params: { apikey: "4181a631-652a-40a2-a57f-e8338074cc5a", resolution: "6km", lat: 39.0742, lon: 21.8243, at_date: "2021-02-28"}
  } )
    .then(result => {
      console.log(result);
      // Min Max if needed
      // const minTemp = Math.trunc(Object.values(result.temperature2m_min.data))
      // const maxTemp = Math.trunc(Object.values(result.temperature2m_max.data))
      // commit('setLocationTempMin', minTemp)
      // commit('setLocationTempMax', maxTemp)

      // For graph
      commit('setTemperatureList', Object.values(result.temperature2m.data))
      // For cards list
      commit('setTempTimeList', result.temperature2m.data)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    })
  },
}

export const getters = {
  getReloadChartDataFlag (state) {
    return state.reloadChartDataFlag
  },
  getLocationTemp (state) {
    return state.locationTemp
  },
  getLocationTempMin (state) {
    return state.locationTempMin
  },
  getLocationTempMax (state) {
    return state.locationTempMax
  },
  getLocationTempMinMax (state) {
    return state.locationTempMin + " - " + state.locationTempMax + " C"
  },
  getLocationHumid (state) {
    return state.locationHumid
  },
  getTemperatureList (state) {
    return state.temperatureList
  },
  getTempTimeList (state) {
    return state.tempTimeList
  }
}