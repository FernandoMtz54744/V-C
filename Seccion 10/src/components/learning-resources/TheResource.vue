<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButton"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButton"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The offical Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link){
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link
      }
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    }, 
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id == resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
  provide(){
    return{
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.removeResource
    }
  }, 
  computed: {
    storedResButton(){
        return this.selectedTab === "stored-resources" ? null : "flat";
    }, 
    addResButton(){
        return this.selectedTab === "add-resource" ? null : "flat";
    }
  }
};
</script>
