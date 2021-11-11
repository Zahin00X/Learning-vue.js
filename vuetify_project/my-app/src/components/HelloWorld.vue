<template>
  <v-container-fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="https://shurjomukhi.com.bd/wp-content/uploads/2019/05/cropped-logo.png" alt="Vuetify.js" class="mb-5">
        
        
        <DemoDataTable></DemoDataTable>
        <Footer></Footer>
        </v-layout>
        </v-slide-y-transition>
        </v-container-fluid> 
</template>

<script>
import DemoDataTable from './DemoDataTable'
import Footer from './Footer'


export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    DemoDataTable,
    Footer
  }
}
</script>

