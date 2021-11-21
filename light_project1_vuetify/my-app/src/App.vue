<template>
  <v-app>

    <v-btn>Register</v-btn>
     <v-btn>Other</v-btn>
    <v-main>
     
    </v-main>
  </v-app>
</template>

<script>

// import AppBar from './components/AppBar.vue';
// import Account from './components/Account.vue';
// import Registration from './components/Registration.vue';

export default {
  name: 'App',
  showFlag : '',

  // components: {
  //   AppBar,
  //   Account,
  //   Registration
  // },

  data: () => ({
    email : '',
    password : '',
  }),

  
};
</script>