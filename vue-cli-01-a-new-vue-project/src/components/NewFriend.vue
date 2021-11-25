<template>
  <section>
  <form @submit.prevent="dataSubmit">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
  </section>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhone: "",
    };
  },
  methods: {
    dataSubmit() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
