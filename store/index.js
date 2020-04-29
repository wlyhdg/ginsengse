import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore
