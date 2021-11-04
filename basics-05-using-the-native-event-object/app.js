const app = Vue.createApp({
  data() 
    {
    return {

      counter: 0,
      name: '',
      //fullName: '',
      lastName: ''

    };
  },
  watch: {

    counter(value)
    {
      const that = this;
      if( value > 65 )
      {
        setTimeout(function () {
          that.counter = 0;
        },2000);
        
      }
    }

    /*  name(value)
      {
        if(value === '')
        {
          this.fullName = '';
        }
        else
        {
          this.fullName = value + ' ' + this.lastName;
        }
      },
      lastName(value)
      {
        if(value === '')
        {
          this.fullName = '';
        }
        else
        {
          this.fullName = this.name + ' ' + value; 
        }
      } */

  }, 
  computed:{

      fullName()
      {
        console.log("Running again!");
        if(this.name === '' || this.lastName === '')
        {
          return '';
        }
        return this.name+ ' '  + this.lastName ;

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
    add(num) 
    {
      this.counter = this.counter + num;
    },
    reduce(num) 
    {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
