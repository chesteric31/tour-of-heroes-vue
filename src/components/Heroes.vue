<template>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li v-for="hero of heroes" :key="hero.id">
    <button type="button" @click="onSelect(hero)"
    :class="{selected: hero === selectedHero}">
      <span class="badge">{{ hero.id }}</span>
      <span class="name">{{ hero.name }}</span>
    </li>
  </ul>
  <hero-detail :hero="selectedHero"></hero-detail>
</template>

<script>

import HeroDetail from './HeroDetail.vue';
import Hero from '../hero';

const ALL = [
  new Hero(11, 'Dr Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan'),
  new Hero(17, 'Dynama'),
  new Hero(18, 'Dr IQ'),
  new Hero(19, 'Magma'),
  new Hero(20, 'Tornado'),
];

export default {
  name: 'Heroes',
  components: {
    HeroDetail
  },
  data() {
    return {
      selectedHero: Hero,
      heroes: ALL,
    };
  },
  computed: {
    heroNameInUppercase() {
      if (!this.selectedHero) return '';
      return this.selectedHero.name.toString().toUpperCase();
    }
  },
  methods: {
    onSelect(hero) {
      this.selectedHero = hero;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

.heroes li {
  display: flex;
}

.heroes button {
  flex: 1;
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #eee;
  margin: 0.5em;
  padding: 0;
  border-radius: 4px;
  display: flex;
  align-items: stretch;
  height: 1.8em;
}

.heroes button:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: 0.1em;
}

.heroes button:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes button.selected {
  background-color: black;
  color: white;
}

.heroes button.selected:hover {
  background-color: #505050;
  color: white;
}

.heroes button.selected:active {
  background-color: black;
  color: white;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.3em 0.7em 0 0.7em;
  background-color: #405061;
  line-height: 1em;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

.heroes .name {
  align-self: center;
}
</style>
