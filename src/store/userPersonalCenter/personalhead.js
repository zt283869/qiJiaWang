/**
 * Created by DELL on 2017/11/22.
 */

import Vue from 'vue'
export default {
  state: {
    navBoxHigt: ''
  },
  mutations: {
    enwsListy (state, str) {
      state.navBoxHigt = str.navBoxHigt
    }
  },
  actions: {
    newsListFun ({commit}, obj) {
      commit('enwsListy',obj)
    }
  }
}
