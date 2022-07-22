const app = Vue.createApp({
    data(){
        return{
            texto: '',
            texto2: ''
        }
    },
    methods:{
        showAlert(){
            alert("Esta es una alerta");
        },
        setText(event){
            this.texto = event.target.value;
        }, 
        setText2(event){
            this.texto2 = event.target.value;
        }
    }
});

app.mount("#assignment");