<template>
    <li>
        <h2>{{friend.name}}  {{friend.isFavorite ? "(Favorite)" : ""}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite" >favorite</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: <strong>{{friend.phone}}</strong></li>
            <li>Email: <strong>{{friend.email}}</strong></li>
        </ul>
         <button @click="$emit('delete', friend.id);">Delete</button>
    </li>
   
</template>

<script>
    export default {
        emits: ["toggle-favorite", "delete"], 
        props: ["friend"],
        data(){
            return{
                detailsAreVisible: false
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                this.$emit("toggle-favorite", this.friend.id);
            }
        }
    }
</script>