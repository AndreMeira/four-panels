// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/style/pages/home.scss';

import Vue from 'vue';
import './bootstrap';
import App from './App';
//import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#root',
  //router,
  components: { App },
  template: '<App/>',
});
