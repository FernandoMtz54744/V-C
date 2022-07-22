const app = Vue.createApp({
    // data: function(){}
    data(){
        return{
            courseGoalA: 'Aprender Vue!', 
            courseGoalB: 'Entender Vue!',
            courseGoalC: '<h1>Esto es html</h1>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            if(Math.random () < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});


app.mount('#user-goal');