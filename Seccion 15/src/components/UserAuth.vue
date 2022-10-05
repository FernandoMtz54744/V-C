<template>
    <button v-if="isAuth" @click="setAuth">Login</button>
    <button v-else @click="setAuth">Logout</button>
</template>

<script>
export default {
    computed:{
        isAuth(){
            return this.$store.getters.getAuth;
        }
    },
    methods:{
        setAuth(){
            this.$store.commit("setAuth");
        }
    }
}
</script>