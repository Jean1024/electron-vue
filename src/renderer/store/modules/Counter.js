const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state,list) {
    state.main = list
  }
}

const actions = {
  someAsyncTask ({ commit },{num = 1}) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER',num)
  }
}

export default {
  state,
  mutations,
  actions
}
