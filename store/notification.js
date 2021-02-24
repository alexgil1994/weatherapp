export const state = () => ({
  enabled: false,
  text: null,
  color: null,
  // todo Use it to trigger disability after some timeout period to close the notification
  cooldown: false
})

export const mutations = {
  enableNotification (state, {text, color}) { // * For multiple parameters we need to wrap them in {}
    console.log("notification");
    state.enabled = true
    state.text = text
    state.color = color
  },
  disableNotification (state) {
    state.enabled = false
    state.text = null
    state.color = null
  }
}

export const actions = {
  enableNotification ( {commit, dispatch}, text, color ) {
    commit('enableNotification', text, color)
    setTimeout(() => {
      dispatch('disableNotification')
    }, 5000);
  },
  disableNotification ( {commit} ) {
    commit('disableNotification')
  }
}

export const getters = {
  getEnabled (state) {
    return state.enabled
  },
  getText (state) {
    return state.text
  },
  getColor (state) {
    return state.color
  }
}