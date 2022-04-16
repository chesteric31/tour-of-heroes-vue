<template>
  <h1 id="app">
    {{ title }}
  </h1>
  <heroes></heroes>
</template>

<script>
import Heroes from './components/Heroes.vue';

export default {
  name: 'App',
  components: {
    Heroes,
  },
  data() {
    return {
      title: 'Tour of Heroes',
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* Application-wide Styles */
  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  h2,
  h3 {<
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }
  body {
    margin: 2em;
  }
  body,
  input[type='text'],
  button {
    color: #333;
    font-family: Cambria, Georgia, serif;
  }
  button {
    background-color: #eee;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: black;
    font-size: 1.2rem;
    padding: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  button:hover {
    background-color: black;
    color: white;
  }
  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }
}
</style>
