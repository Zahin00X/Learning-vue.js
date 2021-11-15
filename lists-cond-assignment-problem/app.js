const app = Vue.createApp({
    data()
    {
        return {
            tasks : [],
            enteredTask : '',
            toggleShow : true
        };
    },
    methods: {
    pushTask()
    {
        this.tasks.push(this.enteredTask);
    },
    changeToggle()
    {
        this.toggleShow = !this.toggleShow;
    }

    },
    computed: {
    
    buttonCaption()
    {
        return this.toggleShow ? 'Hide' : 'Show' ;
    }

    }
});

app.mount('#assignment');