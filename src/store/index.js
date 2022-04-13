// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    heroes: [],
  },
  getters: {
    getHeroes: (state) => state.heroes,
  },
  actions: {
    async fetchHeroes({ commit }) {
      try {
        //const data = await axios.get('https://jsonplaceholder.typicode.com/users')
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
        commit('SET_HEROES', data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_HEROES(state, heroes) {
      state.heroes = heroes;
    },
  },
});
