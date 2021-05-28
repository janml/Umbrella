

export default {
  namespaced: true,
  state: {
    loadingIndicatorActive: false,
    popup: {
      visible: false,
      msg: String()
    }
  },

  mutations: {
    showPopup(state, msg) {
      state.popup.msg = msg
      state.popup.visible = true
    },

    hidePopup(state) {
      state.popup.msg = String()
      state.popup.visible = false
    },

    showLoadingIndicator(state) {
      state.loadingIndicatorActive = true
    },

    hideLoadingIndicator(state) {
      state.loadingIndicatorActive = false
    },
  },

  getters: {
    loadingIndicatorActive: (state) => {return state.loadingIndicatorActive},
    popupVisible: (state) => {return state.popup.visible},
    popupMsg: (state) => {return state.popup.msg}
  }
}
