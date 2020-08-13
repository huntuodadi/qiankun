import Vue from 'vue'
import Router from 'vue-router';
import router from './router';
import App from './App.vue'

import { registerMicroApps, start } from 'qiankun';

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:8081', //子应用必须支持跨域
    container: '#vue',
    activeRule: '/vue',
  },
  // {
  //   name: 'reactApp',
  //   entry: '//localhost:3000', //子应用必须支持跨域
  //   container: '#react',
  //   activeRule: '/react',
  // }
];

registerMicroApps(apps);
start();

Vue.config.productionTip = false
Vue.use(Router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
