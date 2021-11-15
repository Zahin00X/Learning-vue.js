const app = Vue.createApp({

    data()
    {
        return {
        inputClass: '',
        paraFlag: true,
        inputBackgroundColor: ''
        };
    },
    methods: {

    dynamicActive(colorClass)
    {

        if(this.paraFlag === true)
        {
            return {visible : true,
                    user1 : this.inputClass === 'user1',
                    user2 : this.inputClass === 'user2',
                    user3 : this.inputClass === 'user3'
            };
        }
        else if(this.paraFlag === false)
        {
            return {hidden : true };
        }
        
    },
    toggleVisibility()
    {
        this.paraFlag = !this.paraFlag;
    }
},
});

app.mount('#assignment');