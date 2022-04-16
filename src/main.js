const { createApp } = require('vue');
import App from './App.vue';
//Add the line below to the file
import store from './store';
//Import Pinia into your config file
//import { createPinia } from 'pinia';
import Vue from 'vue';
import Vuex from 'vuex';

createApp(App)
  //Add the line below to the file
  //.use(store)
  //.use(createPinia())
  .mount('#app');
