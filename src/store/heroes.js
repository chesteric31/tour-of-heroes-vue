// stores/users.js
import { defineStore } from 'pinia';
// Import axios to make HTTP requests
import axios from 'axios';

export const useHeroStore = defineStore('hero', {
  state: () => ({
    heroes: [],
  }),
  getters: {
    getHeroes(state) {
      return state.heroes;
    },
  },
  actions: {
    async fetchHeroes() {
      try {
        //const data = await axios.get//('https://jsonplaceholder.typicode.com/users')
        //  this.users = data.data
        const data = [
          { id: 11, name: 'Dr Nice' },
          { id: 12, name: 'Narco' },
          { id: 13, name: 'Bombasto' },
          { id: 14, name: 'Celeritas' },
          { id: 15, name: 'Magneta' },
          { id: 16, name: 'RubberMan' },
          { id: 17, name: 'Dynama' },
          { id: 18, name: 'Dr IQ' },
          { id: 19, name: 'Magma' },
          { id: 20, name: 'Tornado' },
        ];
        this.heroes = data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
