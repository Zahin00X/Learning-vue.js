const app = Vue.createApp({

    data()
    {
        return{
            myName: "Zahin",
            age: "<h2>23</h2>",
            futureAge: 28,
            imageLink: "https://shurjomukhi.com.bd/wp-content/uploads/2019/05/cropped-logo.png" 
        };
    },
    methods:
    {
        outputRandomNum()
        {
            return Math.random();
        }
    }
});

app.mount('#assignment');