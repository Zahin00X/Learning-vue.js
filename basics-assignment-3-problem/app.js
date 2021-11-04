const app = Vue.createApp({
    data()
    {
        return{
            num : 0,
            
        }
    },
    methods: {
            addNumber(n)
            {
                this.num = this.num + n;
            }
    },
    computed : {

        result(value)
        {
            if(this.num === 37)
            {
                return this.num;
            }
            else if(this.num > 37)
            {
                return "Too Much!";
            }
            else if(this.num < 37)
            {
                return "Not There Yet!";
            }
        } 

    },
    watch : {
        result()
        {
            const that = this;
            setTimeout(function(){
                that.num = 0;
            },5000)
        }

    }
});

app.mount("#assignment");