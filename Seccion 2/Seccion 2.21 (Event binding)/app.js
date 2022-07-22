const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed:{
    fullName(){
      if(this.name === ""){
        return "";
      }else{
        return `${this.name} Martinez`;
      }
    }
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
    }, 
    resetInput(){
      this.name = "";
    }
  }
});

app.mount('#events');
