<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Username: </label>
            <input type="text" v-model="enteredUsername">
        </div>
        <div>
            <label>Age: </label>
            <input type="number" v-model="enteredAge">
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ["register-user"],
    data(){
        return{
            enteredUsername: "",
            enteredAge: ""
        }
    },
    methods:{
        submitData(){
            this.$emit("register-user", this.enteredUsername, this.enteredAge);
        }
    }
}
</script>