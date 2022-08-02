const app = Vue.createApp({
    data(){
        return {
          friends: [
            {
              id: "Friend1",
              name: "Friend1 Lastname1",
              phone: "5565122061",
              email: "friend1@gmail.com",
            },
            {
              id: "Friend2",
              name: "Friend2 lastname2",
              phone: "5565122061",
              email: "friend2@gmail.com",
            }
          ]
        };
    }
});

app.component("friend-contact", {
    template: `<li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsAreVisible ? "Hide" : "Show"}} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: "Friend1",
                name: "Friend1 Lastname1",
                phone: "5565122061",
                email: "friend1@gmail.com",
              }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app")