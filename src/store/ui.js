

export default {
  namespaced: true,
  state: {
    loadingIndicatorActive: false,
    errorPopup: {
      open: false,
      msg: String()
    }
  },

  mutations: {
    openErrorPopup(state, msg) {
      state.errorPopup.msg = msg
      state.errorPopup.open = true
    },

    closeErrorPopup(state, msg) {
      state.errorPopup.msg = String()
      state.errorPopup.open = false
    },

    showLoadingIndicator(state) {
      state.loadingIndicatorActive = true
    },

    hideLoadingIndicator(state) {
      state.loadingIndicatorActive = false
    },
  }
}
