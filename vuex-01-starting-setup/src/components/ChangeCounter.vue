<template>
<button @click="inc">Add one</button>
<button @click="increase({ value: 12 })">Add 12</button>
</template>
<script>
import { mapActions } from 'vuex';
 export default{

     methods : {
        //  addOne()
        //  {
        //      this.$store.dispatch('increment');
        //  }

        // ...mapActions(['increase', 'increment'])
        ...mapActions({
            inc : 'increment',
            increase : 'increase'
        })  
     }
 }
</script>