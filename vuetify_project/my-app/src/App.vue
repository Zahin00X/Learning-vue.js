<template>
  <v-app>
    <v-app-bar
      app
      color="yellow"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="shurjoMukhi Logo"
          class="shrink mr-2"
          contain
          src="https://shurjomukhi.com.bd/wp-content/uploads/2019/05/cropped-logo.png"
          transition="scale-transition"
          width="40"
        />

        <h1>shurjoMukhi</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
