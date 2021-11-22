<template>
    <div>
        <p>Name is {{name}}</p>
        <p>Email is {{email}}</p>
    </div>
</template>

<script>
  export default {
    name : "Register",
    props: [
        'name', 
        'email'
    ],
    data: () => ({
     //
    }),
  }
</script>