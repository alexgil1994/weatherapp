export const state = () => ({
  // todo to be swapped with the hardcoded coordinates on the request, setting it through the map component on click
  reloadChartDataFlag: false,
  location: null,
  locationTemp: null,
  locationTempMin: null,
  locationTempMax: null,
  locationHumid: null,
  temperatureList: [],
  tempTimeList: [],
  page: 1,
  tempTimeListPage1: [],
  tempTimeListPage2: [],
  tempTimeListPage3: [],
  tempTimeListPage4: []
})

export const mutations = {
  setReloadChartDataFlag (state, data) {
    state.reloadChartDataFlag = data
  },
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
  setPage (state, data) {
    state.page = data
  },
  setTempTimePages (state, page1, page2, page3, page4) {
    state.tempTimeListPage1 = page1
    state.tempTimeListPage2 = page2
    state.tempTimeListPage3 = page3
    state.tempTimeListPage4 = page4
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
      commit('setReloadChartDataFlag', true)
      commit('setTemperatureList', Object.values(result.temperature2m.data))
      // For cards list
      let page1 = []
      let page2 = []
      let page3 = []
      let page4 = []
      // Making the Object an array
      let tempTimeListUnstructured = Object.entries(result.temperature2m.data)
      for (let i = 0; i <= 3; i++) {
        page1.push(tempTimeListUnstructured[i])
      }
      for (let i = 4; i <= 7; i++) {
        page2.push(tempTimeListUnstructured[i])
      }
      for (let i = 8; i <= 11; i++) {
        page3.push(tempTimeListUnstructured[i])
      }
      for (let i = 12; i <= 15; i++) {
        page4.push(tempTimeListUnstructured[i])
      }
      commit('setTempTimePages', page1, page2, page3, page4)
      
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
  getPage (state) {
    return state.page
  },
  getTempTimeListPage (state, getters) {
    switch(getters.getPage) {
      case 1:
        return state.tempTimeListPage1
      case 2:
        return state.tempTimeListPage2
      case 3:
        return state.tempTimeListPage3
      case 4:
        return state.tempTimeListPage4
    }
  }
}