const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate(){
    console.log("beforeCreate()");
  }
});

app.mount('#app');

// ---------- Segunda app de vue -------------
const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: "Tacos!"
    }
  }
});

app2.mount("#app2")

// ---------------------------- JAVASCRIPT --------------------
//Objeto que tiene los datos
const data = {
  message: "Hello",
  longMessage: "Hello world"
}

//Manejador del proxy
const handler = {
  set(target, key, value){ 
    //target: Es el objeto data
    //key: Son las llaves del objeto (message o longMessage)
    //value: Es el nuevo valor que se le asigna
    if(key === "message"){
      target.longMessage = value + " World!"
    }
    target.message = value;
  }
}

//Un proxy empaqueta un objeto y notifica (ejecuta el handler) cada que un valor se ejecuta
//Así se puede crear la reactividad en javascript
const proxy = new Proxy(data, handler); 

// Se actualiza el valor y se imprime
proxy.message = "Hola"
// console.log(proxy.longMessage);
