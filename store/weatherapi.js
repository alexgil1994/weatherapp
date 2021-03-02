export const state = () => ({
  reloadChartDataFlag: false,
  locationLon: null,
  locationLat: null,
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
  tempTimeListPage4: [],
  tempTimeListPage5: [],
  tempTimeListPage6: []
})

export const mutations = {
  setReloadChartDataFlag (state, data) {
    state.reloadChartDataFlag = data
  },
  setLocationLon (state, data) {
    state.locationLon = data
  },
  setLocationLat (state, data) {
    state.locationLat = data
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
  setTempTimePage1 (state, page1) {
    state.tempTimeListPage1 = page1
  },
  setTempTimePage2 (state, page2) {
    state.tempTimeListPage2 = page2
  },
  setTempTimePage3 (state, page3) {
    state.tempTimeListPage3 = page3
  },
  setTempTimePage4 (state, page4) {
    state.tempTimeListPage4 = page4
  },
  setTempTimePage5 (state, page5) {
    state.tempTimeListPage5 = page5
  },
  setTempTimePage6 (state, page6) {
    state.tempTimeListPage6 = page6
  },
  sortTempListAsc (state) {
    state.temperatureList.sort(function(a, b){return a-b})
  },
  sortTempListDesc (state) {
    state.temperatureList.sort(function(a, b){return b-a})
  },
}

export const actions = {
  // Setting location either from geolocation or from clicking
  setLocationFetchData ( { commit, dispatch }, locationArray ) {
    commit('setLocationLat', locationArray[1])
    commit('setLocationLon', locationArray[0])
    dispatch('fetchLocationWeatherLive')
    dispatch('fetchLocationWeather24hr')
  },
  // Fetching data for specific hour
  async fetchLocationWeatherLive ( { getters, commit, dispatch } ) {
    await this.$axios.$get('https://api.draxis.gr/weather/meteo/hourly', { params: { apikey: "4181a631-652a-40a2-a57f-e8338074cc5a", resolution: "6km", lat: getters.getLocationLat, lon: getters.getLocationLon, at_date: new Date().toISOString().substring(0,13)}
  } )
    .then(result => {
      console.log(result);
      // TODO CHECK WHY TIME IS 2 HOURS BACK THAN ACTUAL
      const temp = Math.trunc(Object.values(result.temperature2m.data))
      const humid = Math.trunc(Object.values(result.rh2m.data))
      commit('setLocationTemp', temp)
      commit('setLocationHumid', humid)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    })
  },
  // Fetching data for the graph and the paginated cards list
  async fetchLocationWeather24hr ( { getters, commit, dispatch } ) {
    await this.$axios.$get('https://api.draxis.gr/weather/meteo/hourly', { params: { apikey: "4181a631-652a-40a2-a57f-e8338074cc5a", resolution: "6km", lat: getters.getLocationLat, lon: getters.getLocationLon, at_date: new Date().toISOString().slice(0,10)}
  } )
    .then(result => {
      console.log(result);
      // For graph
      commit('setReloadChartDataFlag', true)
      commit('setTemperatureList', Object.values(result.temperature2m.data))
      // For cards list
      let page1 = []
      let page2 = []
      let page3 = []
      let page4 = []
      let page5 = []
      let page6 = []
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
      for (let i = 16; i <= 19; i++) {
        page5.push(tempTimeListUnstructured[i])
      }
      for (let i = 20; i <= 23; i++) {
        page6.push(tempTimeListUnstructured[i])
      }
      // TODO *** Data from the back end are in a problimatic way to implement sorting ex. {`datetime`: `temperature`, ...} instead of property + value for each.
      // TODO also save in vuex the object.entries to have it stored so that i can do sorting on that data as they were before destructuring.
      // TODO for this to happen you also need to have the upper code as a separate commit maybe so that both use it this action and that other commit ----^
      commit('setTempTimePage1', page1)
      commit('setTempTimePage2', page2)
      commit('setTempTimePage3', page3)
      commit('setTempTimePage4', page4)
      commit('setTempTimePage5', page5)
      commit('setTempTimePage6', page6)
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
  getLocationLon (state) {
    return state.locationLon
  },
  getLocationLat (state) {
    return state.locationLat
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
      case 5:
        return state.tempTimeListPage5
      case 6:
        return state.tempTimeListPage6
      default:
        return null
    }
  }
}