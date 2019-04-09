<template>
  <div id="app">
    <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
      <input type="checkbox" v-model="includeLastName">
    </div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      firstName: 'Carlos',
      lastName: 'Fernández',
      includeLastName: true
    }
  },
  computed: {
    fullName: function() {
      console.log('Calculating Full Name');
      return this.includeLastName
        ? `${this.firstName} ${this.lastName}`
        : this.firstName;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  padding: 50px 0;
  display: block;
  margin: auto;
  max-width: 800px;
}
</style>
