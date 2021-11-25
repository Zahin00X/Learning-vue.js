<template>
    <li>
        <h2>{{ name }} {{  isFavorite  ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <button @click="toggleFavorite">Change Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete-friend', id)">Delete Contact</button>
    </li>
</template>

<script>
export default {
 /*   props: [
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
    ], */
    computed: {
      /*  logicFavorite()
        {
            return isFavorite  ? '(Favorite)' : '';
        } */
    },
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            
        }
    },
    emits: ['toggle-favorite','delete-friend'],
  /* emits: {
       'toggle-favorite': function(id){
           if(id)
           {
               return true;
           }
           else
           {
                console.warn('ID is missing!!');
                return false;   
           }

       } 
   }, */
    data()
    {
        return {
            detailsAreVisible: false,
            
          /*  friend: {
                id: 'zahin',
                name: 'Zahin Masroor',
                phone: '01828050395',
                email: 'zahin0013@gmail.com'
            } */

        };
    },
    methods : {
        toggleDetails()
        {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite()
        {   
            this.$emit('toggle-favorite', this.id);
        },
     /*   deleteFriend()
        {
            this.$emit('delete-friend', this.id)
        } */
    }
};
</script>