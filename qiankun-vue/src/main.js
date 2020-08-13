/* eslint-disable */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import Router from 'vue-router';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Router);

let instance = null;

function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app'); // 挂在到自己的html中 基座会拿到挂载后的html插到base app中
}

if (window.__POWERED_BY_QIANKUN__) {
  console.log('__webpack_public_path__:', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('render');
  render();
}

// 子组件protocal
export async function bootstrap(props) {

}

export async function mount(props) {
  console.log('vue app mount');
  render(props);
}

export async function unmount(props) {
  instance.$destroy();
}
