<template>
  <div v-if="hero.id">
    <h2>{{ heroNameInUppercase }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <label for="hero-name">Hero name:&nbsp;</label>
    <input type="text" id="hero-name" placeholder="name" v-model="hero.name" />
  </div>
</template>

<script>
export default {
  name: 'HeroDetail',
  props: ['hero'],
  data() {
    return {};
  },
  computed: {
    heroNameInUppercase() {
      if (!this.hero) return '';
      return this.hero.name.toString().toUpperCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
