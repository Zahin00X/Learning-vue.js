const app = Vue.createApp({
    data()
    {
        return {
        inputText : '',
        confirmedInputText : ''  
        };
    },
    methods: {
    showAlert()
    {
        alert("WELCOME TO VUE!");
    },
    confirmInput(event)
    {
        this.inputText = event.target.value; 
    },
    showInput(event)
    {
        this.confirmedInputText = event.target.value; 
    }

    }
});

app.mount('#assignment'); 