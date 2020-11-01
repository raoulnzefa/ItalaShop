import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('apollo-token') || null
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
    }
  },
  actions: {
    commitToken({commit},token){
      commit('setToken', token)
    },
    getToken({commit}){
      const token = localStorage.getItem('apollo-token')

      if(token){
        commit('setToken',token)
      }else{
        commit('setToken',null)
      }
    }
  },
  modules: {
  }
})
