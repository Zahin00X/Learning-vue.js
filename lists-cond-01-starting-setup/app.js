const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoal: '' 
    };
  },
  methods:{
    addGoal()
    {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(x)
    {
      this.goals.splice(x, 1);
    }
  }
});

app.mount('#user-goals');
