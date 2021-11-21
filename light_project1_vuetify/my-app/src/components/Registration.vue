<template>
    <div>
        <p>This is a register component</p>
        </div>
</template>


<script>

export default {
data: () => ({
      
      

    }),
    props : {

        email: {
            type : String,
            required : true
        },
        password: {
            type : String,
            required : true
        } 

    }

}

</script>
