const app = Vue.createApp({
    data(){
        return{
            number: 0
        }
    },
    computed:{
        result(){
            if(this.number < 37){
                return "Not there yet";
            }else if(this.number > 37){
                return "Too much!";
            }else{
                return this.number;
            }
        }
    },
    watch:{
        result(){
            const that = this; //Porque this dentro del timeout apunta a otra cosa
            setTimeout(()=>{
                that.number = 0;
            },5000)
        }
    },
    methods:{
        add(num){
            this.number+=num;
        }
    }

});

app.mount("#assignment");