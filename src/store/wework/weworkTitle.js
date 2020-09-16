
import Vue from "vue"

const state = {
  area:'',
  rank:'',
  trade:'',
};
const mutations = {
  weWorkArea( state, data){
    state.area=data
  },
  weWorkRank( state, data){
    state.rank=data

  },
  weWorkTrade( state,data){
    state.trade=data

  },

};

const actions = {
  //创业载体列表信息
  weworkTitleAreas ({ commit, dispatch }, urlArea) {
    Vue.http.get('/createSever_url'+urlArea)
      .then((res) =>{
    commit('weWorkArea',res)
  }).catch(function() {
    });
  },
  weworkTitleRank ({ commit, dispatch }, urlRank) {

    Vue.http.get('/createSever_url' + urlRank)
      .then((res) => {
      commit('weWorkRank',res)
  }).
    catch(function () {
    })
  },
  weworkTitleTrades({ commit, dispatch }, urlTrade) {
        Vue.http.get('/createSever_url'+urlTrade)
          .then((res) =>{
          commit('weWorkTrade',res)
      }).catch(function() {
    });

  }

};
export default {
  state,
  mutations,
  actions
}
