<template>
    <section>
        <form @submit.prevent="$emit('send-user', enteredName, enteredAge)">
            <div>
                <label>userName</label>
                <input type="text" v-model='enteredName'>
            </div>
            <div>
                <label>Age</label>
                <input type="text" v-model='enteredAge'>
            </div>
            <div>
                <button>Add User</button>
            </div>
        </form>
    </section>
</template>


<script>
export default{
    emits:['send-user'],
    data()
    {
        return {
            enteredName: '',
            enteredAge: ''
        }
    }
};

</script>