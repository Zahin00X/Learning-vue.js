Vue.createApp({

    data() 
    {
        return {
            goals: [],
            enteredValue:''
        };
    },

    methods: {
        addGoal()
        {
            this.goals.push(this.enteredValue);
        }
    }

}).mount("#app");
 








/*
// mapping of elements

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

//creating lists for every input
function addGoal()
{
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value='';
} 


//creating click listener for every input submit
buttonEl.addEventListener('click', addGoal);
*/