const app = Vue.createApp({
    data(){
        return{
            input: '',
            visible: true, 
            inline: ''
        }
    },
    computed:{
        setClass(){
            if(this.input === "user1"){
                return {user1: true};
            }else if(this.input === "user2"){
                return {user2: true};
            }
        },
        setVisibility(){
            if(this.visible){
                return {visible: true};
            }else{
                return {hidden: true};
            }
        }
    },
    methods:{
        setVisible(){
            this.visible = !this.visible;
        }
    }

});

app.mount("#assignment");