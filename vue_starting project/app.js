const app = Vue.createApp({
    data() 
    {
        return{
            courseGoalA: 'Finish Vue.js within 15 days!',
            courseGoalB: '<h1>Finish docker within 15 days!</h1>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal()
        {
            const randomNumber = Math.random();
            if(randomNumber < 0.5)
            {
                return this.courseGoalA;
            }
            else
            {
                return this.courseGoalB;
            }
        }
    }
});


app.mount('#user-goal');