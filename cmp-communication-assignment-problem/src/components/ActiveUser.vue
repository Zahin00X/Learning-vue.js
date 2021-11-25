<template>
<section>
<li>
    <h2>Name:{{ name }}</h2>
    <h3>Age:{{ age }}</h3>
</li>
</section>
</template>

<script> 
export default{
props : {
    name:{
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    id:{
        type : String,
        required : true
    }
},
};
</script>