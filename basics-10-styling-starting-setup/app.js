const app = Vue.createApp({
    data()
    {
        return{

            boxSelectedA : false,
            boxSelectedB : false,
            boxSelectedC : false
        }
    },
    methods: {
        selectBox(box)
        {
            if(box ==='A')
            {
                this.boxSelectedA = true;
            }
            else if(box ==='B')
            {
                this.boxSelectedB = true;
            }
            else if(box === 'C')
            {
                this.boxSelectedC = true;
            }
        }

    }

});

app.mount("#styling");