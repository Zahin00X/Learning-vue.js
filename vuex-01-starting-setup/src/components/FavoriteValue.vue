<template>
<h3>{{ counter }}</h3>
<h3>{{ normalizedCounter }}</h3>
<p>We do more...</p>
</template>

<script>
export  default{


    computed : {
        counter()
        {
            return this.$store.getters.normalizedCounter;
        },
       

    }


}
</script>