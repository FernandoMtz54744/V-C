<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: <strong>{{friend.phone}}</strong></li>
            <li>Email: <strong>{{friend.email}}</strong></li>
        </ul>
    </li>
</template>

<script>
    export default {
        data(){
            return{
                detailsAreVisible: false,
                friend: {
                        id: "Friend1",
                        name: "nameFriend1",
                        phone: "5565122061",
                        email: "Friend1@gmail.com"
                    }
            }
        },
        methods:{
            toogleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    }
</script>