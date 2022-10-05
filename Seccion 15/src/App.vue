<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="add">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed:{
    counter(){
      return this.$store.getters.finalCounter;
    }
  },
  methods:{
    add(){
      this.$store.dispatch("increment");
      // this.$store.commit("increment", {value: 10});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>