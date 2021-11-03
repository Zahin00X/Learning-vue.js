const app = Vue.createApp({
  data() 
    {
    return {
      counter: 0,
      name: '',
    };
  },
/*  watch: {

      name(value)
      {
        if(value === '')
        {
          this.fullName = '';
        }
        else
        {
          this.fillName = value + ' ' + "Masroor Bhuiuyan";
        }
      }

  }, */
  computed:{

      fullName()
      {
        console.log("Running again!");
        if(this.name === '')
        {
          return '';
        }
        return this.name+ ' '  + 'Masroor Bhuiyan' ;

      }
  },
  methods: {
    resetInput()
    {
      this.name = "";
    },
   /* setName(event, lastName) {
      this.name = event.target.value;
    }, */
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
