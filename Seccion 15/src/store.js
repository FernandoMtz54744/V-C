import { createStore } from "vuex"

const counterModule = {
    state(){
        return {
            counter: 0
        }
    },
    mutations:{
        increment(state, payload){
            state.counter+= payload.value;
        }
    },
    actions:{
        increment(context){
            setTimeout(()=>{
                context.commit("increment", {value: 10});
                console.log("ok")
            }, 2000)
        }
    },
    getters: {
        finalCounter(state){
            return state.counter * 2;
        }
    }
}

const store = createStore({
    modules:{
        counter: counterModule
    },
    state(){
        return{
            isLoggedIn: false
        }
    },
    mutations:{
        setAuth(state){
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
    getters:{
        getAuth(state){
            return state.isLoggedIn;
        }
    }
});

export default store;