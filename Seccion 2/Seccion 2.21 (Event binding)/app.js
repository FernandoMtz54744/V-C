const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(){
      this.counter++;
    },
    remove(){
      this.counter--;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(){
      alert("Enviado");
    }
  }
});

app.mount('#events');
