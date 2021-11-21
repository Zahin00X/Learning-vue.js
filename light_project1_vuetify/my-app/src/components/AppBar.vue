<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="setTitle('Registration')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item>

          <v-list-item @click="setTitle('Account')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

  export default {
    data: () => ({
      
      formTitle: 'Registration',
      drawer: false,
      group: null,
      email : '',
      password : '',



    }),
    methods: {
      setTitle(x)
      {
        this.formTitle = x;
        this.drawer = !this.drawer;
      }

    },
    props : {

      showFlag: {
        type : Boolean,
        require : true
      }

    }
  }
</script>
