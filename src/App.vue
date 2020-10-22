<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods:{
    ...mapActions(['getToken'])
  },
  created(){
    this.getToken()
  }
};
</script>
