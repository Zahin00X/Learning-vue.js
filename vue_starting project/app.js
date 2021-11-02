const app = Vue.createApp({
    data() 
    {
        return{
            courseGoal: 'Finish Vue.js within 15 days!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal()
        {
            const randomNumber = Math.random();
            if(randomNumber < 0.5)
            {
                return 'AdorshoPraanisheba!';
            }
            else
            {
                return 'shurjoPay!';
            }
        }
    }
});


app.mount('#user-goal');