import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
    }
  },
  actions: {
    async login({commit},user){
      const response = await this.$apollo.mutate({
          mutation: gql`mutation($username: String!,
            $password: String!){
            login(input: {
              username: $username,
              password: $password
            }){
                token
            }
        }`,
        variables:{
          username: user.name,
          password: user.password
        }
      })

      console.log(response.data.token)
      commit('setToken', response.data.token)
      localStorage.setItem('token', response.data.token)
    },
    getToken({commit}){
      const token = localStorage.getItem('token')

      if(token){
        commit('setToken',token)
      }
    }
  },
  modules: {
  }
})
