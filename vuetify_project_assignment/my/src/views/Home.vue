<template>
  
  <v-form v-model="valid">
   
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            type="password"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
   <!-- <button @click="showRegisterComponent">showRegisterComponent</button> -->

   <!-- <h1>{{ dataApi }}</h1> -->
    
   <!-- <Register :name="name" :email="email" :data="dataApi" /> -->

   <About :name="name" :email="email" :dataArray="dataApi" />
    
    
  </v-form>
</template>

<script>
 import axios from 'axios';
 
 //import Register from './Register';
 import About from './About'
  export default {
    name : "Home",
    components: {
    //  Register
    About
   },

    data: () => ({
      dataApi : null,
      valid: false,
      name: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    mounted()
    {
      
      
      axios.get('https://pranishebavet.com.bd/api/get-districts').then(response =>( this.dataApi= response.data.districts_info));
      

    },
    methods: {
      
    // shareData()
    // {
    //    this.$router.push({name:"About", params:{ nameProp : this.name , emailProp: this.email , passwordProp : this.password }});
    // },
  }


  }
</script>