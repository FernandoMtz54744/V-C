import { createApp } from 'vue';
import { createStore } from "vuex"
 
import App from './App.vue';

const store = createStore({
    state(){
        return{
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
    getters:{
        finalCounter(state){
            return state.counter * 2;
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
