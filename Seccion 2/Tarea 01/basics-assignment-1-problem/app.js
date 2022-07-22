const app = Vue.createApp({
    data(){
        return{
            name: "Fernando Martinez",
            age: 21,
            image: "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg?itok=9hyNVMwe"
        }
    },
    methods: {
        outputRandom(){
            return Math.random();
        }
    }
});

app.mount("#assignment");