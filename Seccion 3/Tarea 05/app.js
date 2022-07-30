const app = Vue.createApp({
    data(){
        return{
            inputTask: '',
            tasks: [], 
            show: true
        }
    }, 
    methods:{
        addTask(){
            this.tasks.push(this.inputTask);
            this.inputTask = "";
        },
        setShow(){
            this.show = !this.show;
        }
    },
    computed:{
        buttonText(){
            return this.show ? "Hide" : "Show list"
        }
    }

});

app.mount("#assignment");