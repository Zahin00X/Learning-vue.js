<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data()
    {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'zahin',
                name: 'Zahin Masroor',
                phone: '01828050395',
                email: 'zahin0013@gmail.com'
            }

        };
    },
    methods : {
        toggleDetails()
        {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>