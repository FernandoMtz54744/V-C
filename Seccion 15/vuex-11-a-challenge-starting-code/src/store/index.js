import { createStore } from "vuex";
import productsModule from "./modules/products";
import cartModule from "./modules/cart";

const store = createStore({
    modules:{
        prods: productsModule,
        cart: cartModule
    },
    state(){
        return{
            isLogged: false
        }
    },
    mutations:{
        loging(state){
            state.isLogged = true;
        },
        logout(state){
            state.isLogged = false;
        }
    },
    actions:{
        login(context){
            context.commit("loging");
        },
        logout(context){
            context.commit("logout");
        }
    },
    getters:{
        isAuthenticated(state){
            return state.isLogged;
        }
    }
});

export default store;